const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;
const secretKey = 'your-secret-key'; // Changez cette valeur pour une clé secrète sécurisée

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuration de multer pour gérer les fichiers uploadés
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renomme le fichier avec un timestamp
  }
});
const upload = multer({ storage });

// Simulation de stockage d'utilisateurs et d'images (remplacez par une base de données en production)
const users = [
  { username: 'test', password: '$2a$10$E6.D8eFi0nlE9Jx.uqz6OeO7PVRmxfMhK44Tk3brncvZm.T9p.n/C' } // mot de passe haché pour "password"
];

const images = [];

// Middleware pour vérifier le token JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Route pour l'inscription d'un nouvel utilisateur
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'Nom d\'utilisateur déjà utilisé' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur' });
  }
});

// Route pour le login d'un utilisateur
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = users.find(user => user.username === username);
    if (!user) {
      return res.status(400).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Erreur lors de la connexion de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de la connexion de l\'utilisateur' });
  }
});

// Route pour récupérer les images
app.get('/images', (req, res) => {
  res.json(images);
});

// Route pour ajouter une image (protégée par JWT)
app.post('/images', authenticateJWT, upload.single('image'), (req, res) => {
  const newImage = { url: `http://localhost:3001/uploads/${req.file.filename}`, _id: Date.now().toString() };
  images.push(newImage);
  res.status(201).json(newImage);
});

// Route pour supprimer une image (protégée par JWT)
app.delete('/images/:id', authenticateJWT, (req, res) => {
  const imageId = req.params.id;
  const imageIndex = images.findIndex(image => image._id === imageId);
  if (imageIndex === -1) {
    return res.status(404).json({ message: 'Image non trouvée' });
  }
  images.splice(imageIndex, 1);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
