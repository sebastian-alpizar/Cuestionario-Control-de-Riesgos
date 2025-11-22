# File Tree: risk-assessment-questionnaire

**Generated:** 11/19/2025, 11:53:15 AM
**Root Path:** `c:\Users\sebas\Downloads\risk-assessment-questionnaire`

```
├── 📁 backend
│   ├── 📁 app
│   │   ├── 📁 Http
│   │   │   └── 📁 Controllers
│   │   │       └── 📁 Api
│   │   │           ├── 🐘 AuthController.php
│   │   │           ├── 🐘 EvaluacionController.php
│   │   │           └── 🐘 PreguntaController.php
│   │   ├── 📁 Models
│   │   │   ├── 🐘 Evaluacion.php
│   │   │   ├── 🐘 Norma.php
│   │   │   ├── 🐘 Pregunta.php
│   │   │   ├── 🐘 Respuesta.php
│   │   │   ├── 🐘 Tarea.php
│   │   │   └── 🐘 Usuario.php
│   │   └── 📁 Providers
│   │       └── 🐘 AppServiceProvider.php
│   ├── 📁 bootstrap
│   │   ├── 🐘 app.php
│   │   └── 🐘 providers.php
│   ├── 📁 config
│   │   ├── 🐘 app.php
│   │   ├── 🐘 auth.php
│   │   ├── 🐘 cache.php
│   │   ├── 🐘 database.php
│   │   ├── 🐘 filesystems.php
│   │   ├── 🐘 logging.php
│   │   ├── 🐘 mail.php
│   │   ├── 🐘 queue.php
│   │   ├── 🐘 services.php
│   │   └── 🐘 session.php
│   ├── 📁 database
│   │   ├── 📁 factories
│   │   │   └── 🐘 UserFactory.php
│   │   ├── 📁 migrations
│   │   │   ├── 🐘 0001_01_01_000001_create_cache_table.php
│   │   │   ├── 🐘 0001_01_01_000002_create_jobs_table.php
│   │   │   ├── 🐘 2025_08_18_020600_create_usuarios_table.php
│   │   │   ├── 🐘 2025_08_18_020711_create_norma_table.php
│   │   │   ├── 🐘 2025_08_18_020730_create_tarea_table.php
│   │   │   ├── 🐘 2025_08_18_020736_create_evaluaciones_table.php
│   │   │   ├── 🐘 2025_08_18_020743_create_pregunta_table.php
│   │   │   └── 🐘 2025_08_18_020749_create_respuestas_table.php
│   │   ├── 📁 seeders
│   │   │   └── 🐘 DatabaseSeeder.php
│   │   └── ⚙️ .gitignore
│   ├── 📁 public
│   │   ├── ⚙️ .htaccess
│   │   ├── 📄 favicon.ico
│   │   ├── 🐘 index.php
│   │   └── 📄 robots.txt
│   ├── 📁 resources
│   │   ├── 📁 css
│   │   │   └── 🎨 app.css
│   │   └── 📁 js
│   │       ├── 📄 app.js
│   │       └── 📄 bootstrap.js
│   ├── 📁 routes
│   │   ├── 🐘 api.php
│   │   ├── 🐘 console.php
│   │   └── 🐘 web.php
│   ├── 📁 storage
│   ├── ⚙️ .editorconfig
│   ├── ⚙️ .gitattributes
│   ├── 📄 artisan
│   ├── ⚙️ composer.json
│   ├── ⚙️ package.json
│   ├── ⚙️ phpunit.xml
│   └── 📄 vite.config.js
├── 📁 frontend
│   ├── 📁 public
│   │   └── 📄 favicon.ico
│   ├── 📁 src
│   │   ├── 📁 assets
│   │   │   └── 🖼️ logo.png
│   │   ├── 📁 components
│   │   │   ├── 📄 FooterComponent.vue
│   │   │   ├── 📄 FormQuestions.vue
│   │   │   ├── 📄 HeaderComponent.vue
│   │   │   ├── 📄 ListEvaluations.vue
│   │   │   ├── 📄 ListQuestions.vue
│   │   │   ├── 📄 LoginRegister.vue
│   │   │   ├── 📄 Logo.vue
│   │   │   ├── 📄 RoundCheckbox.vue
│   │   │   ├── 📄 Semaphore.vue
│   │   │   └── 📄 SquareCheckbox.vue
│   │   ├── 📁 router
│   │   │   └── 📄 index.js
│   │   ├── 📁 stores
│   │   │   ├── 📄 Evaluaciones.js
│   │   │   ├── 📄 Preguntas.js
│   │   │   └── 📄 auth.js
│   │   ├── 📁 styles
│   │   │   ├── 🎨 About.css
│   │   │   ├── 🎨 App.css
│   │   │   ├── 🎨 FormQuestions.css
│   │   │   ├── 🎨 ListEvaluations.css
│   │   │   ├── 🎨 ListQuestions.css
│   │   │   ├── 🎨 LoginRegister.css
│   │   │   ├── 🎨 Logo.css
│   │   │   ├── 🎨 RoundCheckbox.css
│   │   │   ├── 🎨 Semaphore.css
│   │   │   └── 🎨 SquareCheckbox.css
│   │   ├── 📁 views
│   │   │   ├── 📄 About.vue
│   │   │   ├── 📄 Home.vue
│   │   │   └── 📄 Login.vue
│   │   ├── 📄 App.vue
│   │   └── 📄 main.js
│   ├── 🌐 index.html
│   ├── ⚙️ jsconfig.json
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   └── 📄 vite.config.js
├── ⚙️ .gitignore
└── 📝 README.md
```

---
*Generated by FileTree Pro Extension*