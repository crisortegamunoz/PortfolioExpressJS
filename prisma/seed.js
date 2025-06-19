const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const now = new Date();
  const user = 'Crisortega';

  // 🚀 Seed: Categories
  const categories = [
    { id: 18, name: 'CiberSeguridad', section: 'CERTIFICATE' },
    { id: 17, name: 'Inteligencia Artificial', section: 'CERTIFICATE' },
    { id: 15, name: 'Conocimiento', section: 'KNOWLEDGE' },
    { id: 14, name: 'Habilidad', section: 'KNOWLEDGE' },
    { id: 13, name: 'Educación', section: 'EXPERIENCE' },
    { id: 12, name: 'Trabajo', section: 'EXPERIENCE' },
    { id: 11, name: 'Personal', section: 'PORTFOLIO' },
    { id: 10, name: 'Laboratorio', section: 'PORTFOLIO' },
    { id: 9, name: 'Profesional', section: 'PORTFOLIO' },
    { id: 8, name: 'Soft-Skills', section: 'CERTIFICATE' },
    { id: 7, name: 'Cloud', section: 'CERTIFICATE' },
    { id: 6, name: 'Frontend', section: 'CERTIFICATE' },
    { id: 5, name: 'Backend', section: 'CERTIFICATE' }
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: {
        ...category,
        createdAt: now,
        updatedAt: now,
        createdBy: user,
        updatedBy: user
      }
    });
  }

  console.log('✅ Categories seeded successfully');

  // 👤 Seed: AboutMe
  const aboutMe = await prisma.aboutMe.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: '¿Quién Soy?',
      description: [
        '¡Hola! Me llamo Cristian, soy ingeniero en informática con 9 años de experiencia en el desarrollo y gestión de software, con un fuerte compromiso con la satisfacción y el bienestar del cliente, diseñando e implementando mejoras en los sistemas.',
        'Apasionado por aprender nuevas tecnologías y siempre estoy buscando nuevas herramientas para mejorar mis habilidades en el campo del desarrollo de software.',
        'Me gustan las actividades físicas, es por eso que disfruto andar en bicicleta y jugar volleyball. Me gusta compartir con mis amistades y familiares, así como también jugar con mis mascotas.'
      ].join('\n\n'),
      createdAt: now,
      updatedAt: now,
      createdBy: user,
      updatedBy: user
    }
  });

  // 📦 Seed: AboutMeBoxes
  const boxes = [
    {
      id: 1,
      title: 'Tecnologías',
      description: 'Ayudando a la industria tecnológica a desarrollar nuevas plataformas de alto rendimiento con la finaliad de facilitar la vida a las personas.',
      cssStyle: 'about-box bg-[#fcf4ff] dark:bg-transparent',
      iconImg: '/assets/images/icons/icon1.svg',
      orderPosition: 1
    },
    {
      id: 2,
      title: 'Gestión de equipo',
      description: 'Guiando y retroalimentando a los miembros del equipo en pro del cumplimiento de metas, priorizando la eficiencia y prolijidad.',
      cssStyle: 'about-box bg-[#fff4f4] dark:bg-transparent',
      iconImg: '/assets/images/icons/icon2.svg',
      orderPosition: 2
    },
    {
      id: 3,
      title: 'Desarrollo',
      description: 'Dedicado a la creación, mantención y a mejorar las funcionalides de las aplicaciones para que el usuario tenga una buena experiencia.',
      cssStyle: 'about-box bg-[#fcf4ff] dark:bg-transparent',
      iconImg: '/assets/images/icons/icon3.svg',
      orderPosition: 3
    },
    {
      id: 4,
      title: 'Compartir conocimiento',
      description: 'Guiando a mis compañeros y compañeras de trabajo, compartiendo el conocimiento, ya sea sobre una tecnología en especifico o sobre el negocio.',
      cssStyle: 'about-box bg-[#fcf4ff] dark:bg-transparent',
      iconImg: '/assets/images/icons/icon4.svg',
      orderPosition: 4
    },
    {
      id: 5,
      title: 'Planning',
      description: 'Participación continua con los clientes, revisando la factibilidad técnica de sus requerimientos para implementarlos en los sistemas.',
      cssStyle: 'about-box bg-[#fefaf0] dark:bg-transparent',
      iconImg: '/assets/images/icons/icon5.svg',
      orderPosition: 5
    },
    {
      id: 6,
      title: 'Aprendiendo',
      description: 'Siempre es bueno ver que hay de nuevo en el mercado, por ese motivo actualizo mi stack constantemente viendo nuevas versiones o framework.',
      cssStyle: 'about-box bg-[#fcf4ff] dark:bg-transparent',
      iconImg: '/assets/images/icons/icon6.svg',
      orderPosition: 6
    }
  ];

  for (const box of boxes) {
    await prisma.aboutMeBox.upsert({
      where: { id: box.id },
      update: {},
      create: {
        ...box,
        aboutMeId: aboutMe.id,
        createdAt: now,
        updatedAt: now,
        createdBy: user,
        updatedBy: user
      }
    });
  }

  console.log('✅ AboutMe & AboutMeBoxes seeded successfully');


  // 📜 Seed: Certificates
const certificates = [
  {
    id: 62,
    name: 'Curso de Criptografía',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2025%2F2025-01-18_Fundamentos_Criptografia.pdf?alt=media&token=e0ca4127-99f6-4a3e-84f9-8ff560516dac',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2025%2F2025-01-18_Fundamentos_Criptografia.png?alt=media&token=6229b8f4-00ba-4b7b-bfb4-c63640dc7776',
    entityName: 'Platzi',
    completed: new Date('2025-01-18T04:00:00'),
    categoryId: 18
  },
  {
    id: 61,
    name: 'Curso Github Copilot',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-09-08_Github_Copilot.pdf?alt=media&token=93c527d1-3097-4605-bbd0-ff3da4b28911',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-09-08_Github_Copilot.png?alt=media&token=86758bac-7172-4184-ac92-60744fee16ce',
    entityName: 'Platzi',
    completed: new Date('2024-09-08T04:00:00'),
    categoryId: 17
  },
  {
    id: 60,
    name: 'Herramientas IA Developers',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-09-02_Herramientas_IA_Developers.pdf?alt=media&token=08d9c700-f515-40ac-8715-577aa9ce2d06',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-09-02_Herramientas_IA_Developers.png?alt=media&token=8215c12c-2a12-4133-bdf7-f923b64cfaba',
    entityName: 'Platzi',
    completed: new Date('2024-09-02T04:00:00'),
    categoryId: 17
  },
  {
    id: 59,
    name: 'Curso Prompt Engineering',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-08-26_Prompt_Engineering.pdf?alt=media&token=006a69b1-1aa2-4425-9f1c-7e344bfdab27',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-08-26_Prompt_Engineering.png?alt=media&token=9f81599f-2505-459c-809d-6c683103692f',
    entityName: 'Platzi',
    completed: new Date('2024-08-26T04:00:00'),
    categoryId: 17
  },
  {
    id: 58,
    name: 'Apache Camel Framework',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-07_25_Learn_Apache_Camel_Framework.pdf?alt=media&token=270892bd-3df5-4c3b-9d78-c179520b6728',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-07_25_Learn_Apache_Camel_Framework.png?alt=media&token=f92b8b00-90b8-4e61-8160-b6c3980a2f33',
    entityName: 'Udemy',
    completed: new Date('2024-07-25T04:00:00'),
    categoryId: 5
  },
  {
    id: 57,
    name: 'Desarrollo Seguro Software',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-08-26_Desarrollo_Software_Seguro.pdf?alt=media&token=a63ffc19-e70d-4976-8f02-2eaf02216596',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-08-26_Desarrollo_Software_Seguro.png?alt=media&token=532ce5b9-2da1-4e21-a791-d4c71119d064',
    entityName: 'Udemy',
    completed: new Date('2024-07-17T04:00:00'),
    categoryId: 5
    },
    {
        id: 56,
        name: 'OWASP Seguridad en APIs',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-07-17_OWASP_Seguridad_APIS.pdf?alt=media&token=7e6c9565-5f3a-43a6-bd9f-ff6bea61fca4',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-07-17_OWASP_Seguridad_APIS.png?alt=media&token=f55b5c94-82b7-4eb8-987e-38eba39c1ea7',
        entityName: 'Udemy',
        completed: new Date('2024-07-17T04:00:00'),
        categoryId: 5
    },
    {
        id: 55,
        name: 'Fundamentos IA',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-05-21_Fundamentos_IA.pdf?alt=media&token=d3f6fc4e-3f3b-4f70-8b2d-f29b7258c9d8',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-05-21_Fundamentos_IA.png?alt=media&token=eef3b357-f95f-4b7d-95ad-f72b9638cdea',
        entityName: 'Platzi',
        completed: new Date('2024-05-21T04:00:00'),
        categoryId: 17
    },
    {
        id: 54,
        name: 'Master IA Generativa',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-05-20_Master_IA_Generativa.pdf?alt=media&token=8fc51846-bd3e-44fa-b884-ada903b5d746',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2024%2F2024-05-20_Master_IA_Generativa.png?alt=media&token=23a4a3e0-ffa5-467b-bfb1-db793331cf77',
        entityName: 'Udemy',
        completed: new Date('2024-05-20T04:00:00'),
        categoryId: 17
    },
    {
        id: 51,
        name: 'Curso Marca Personal',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-07-18_Marca-Personal.pdf?alt=media&token=e05ae6c7-2d0a-43a2-9890-0f715e8fb19c',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-07-18_Marca-Personal.png?alt=media&token=ca21ad43-0b97-4a80-9ad3-c3e8d2af581d',
        entityName: 'Platzi',
        completed: new Date('2023-07-18T04:00:00'),
        categoryId: 8
    },
    {
        id: 50,
        name: 'StoryTelling Marca Personal',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-07-11_Storytelling-Marca-Personal.pdf?alt=media&token=437868fb-bc1e-4d19-b5db-975f4217f634',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-07-11_Storytelling-Marca-Personal.png?alt=media&token=704202fd-3ea2-484d-808e-83e3e37c083d',
        entityName: 'Platzi',
        completed: new Date('2023-07-11T04:00:00'),
        categoryId: 8
    },
    {
        id: 49,
        name: 'Curso Spring Security',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-07-08_Spring_Security.pdf?alt=media&token=acda6c97-f3a9-4f0c-8be7-b2dd9445a3e6',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-07-08_Spring_Security.png?alt=media&token=c7c65d39-a073-4c44-8a4a-2c2049fd74f0',
        entityName: 'Platzi',
        completed: new Date('2023-07-08T04:00:00'),
        categoryId: 5
    },
    {
        id: 48,
        name: 'Curso Spring Data JPA',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-06-29_Spring%20Data%20JPA.pdf?alt=media&token=fbae2639-8e4c-413b-aad3-6fa7e0e7621b',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-06-29_Spring%20Data%20JPA.png?alt=media&token=2c204ab1-5cc7-458b-90dc-43fbf83c1e81',
        entityName: 'Platzi',
        completed: new Date('2023-06-29T04:00:00'),
        categoryId: 5
    },
    {
        id: 47,
        name: 'Angular CDK y TailwindCSS',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-06-11_Angular_TailwindCSS.pdf?alt=media&token=1e938086-9c48-4a48-8bdc-edb01212c1bc',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-06-11_Angular_TailwindCSS.png?alt=media&token=1f5c4da7-2b78-43b5-a277-61612f45770a',
        entityName: 'Platzi',
        completed: new Date('2023-06-11T04:00:00'),
        categoryId: 6
    },
    {
        id: 46,
        name: 'Angular Router y Modular',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-06-01_Angular_Router_Modular.pdf?alt=media&token=f58abbc4-987e-4e64-96f2-7187da43a9c2',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-06-01_Angular_Router_Modular.png?alt=media&token=7b36afb8-fbed-4590-84ef-4515aa721313',
        entityName: 'Platzi',
        completed: new Date('2023-06-01T04:00:00'),
        categoryId: 6
    },
    {
        id: 45,
        name: 'Consumo de APIS Rest con Angular',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-05-29_Consumo_Api_Rest.pdf?alt=media&token=8c96da28-754c-42d9-aeac-634c2bc6fe6d',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-05-29_Consumo_Api_Rest.png?alt=media&token=e39ebc1d-1076-41c9-be29-2ccc6b6edac7',
        entityName: 'Platzi',
        completed: new Date('2023-05-29T04:00:00'),
        categoryId: 6
    },
    {
        id: 44,
        name: 'Angular Componentes y Servicios',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-05-25_Componentes_y_servicios.pdf?alt=media&token=bc409385-cb31-40e9-84c8-77fb2b4b5832',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-05-25_Componentes_y_servicios.png?alt=media&token=e6244ead-ecce-4982-8cc2-a334de7b104b',
        entityName: 'Platzi',
        completed: new Date('2023-05-25T04:00:00'),
        categoryId: 6
    },
    {
        id: 43,
        name: 'Fundamentos de Angular',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-05-24_Fundamentos_de_angular.pdf?alt=media&token=6ab591d7-4ee2-408d-abed-02662b4e5b03',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-05-24_Fundamentos_de_angular.png?alt=media&token=b6ba2cc4-6e5f-4d7c-b6c4-819a4627bf9c',
        entityName: 'Platzi',
        completed: new Date('2023-05-24T04:00:00'),
        categoryId: 6
    },
    {
        id: 42,
        name: 'Almacenamiento y DataBase AWS',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-04-04_Computo.pdf?alt=media&token=8302034a-2fb0-470e-b217-eb542f08e65a',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-04-04_Computo.png?alt=media&token=794e8146-3a40-4898-a08f-036be25aaccb',
        entityName: 'Platzi',
        completed: new Date('2023-04-04T04:00:00'),
        categoryId: 7
    },
    {
        id: 41,
        name: 'Curso Fundamentos AWS',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-03-07_Fundamentos_AWS.pdf?alt=media&token=790872ee-2f2f-4fb1-8685-9b5f38ebf643',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2023%2F2023-03-07_Fundamentos_AWS.png?alt=media&token=48371c12-88e3-4603-9827-12a7fbd2aeb8',
        entityName: 'Platzi',
        completed: new Date('2023-03-07T03:00:00'),
        categoryId: 7
    },
    {
        id: 40,
        name: 'Estructura de Datos JavaScript',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2022-05-06_Estructura_datos_javascript.pdf?alt=media&token=0c9cdc6b-a155-41f6-bd98-70e53619d696',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2022-05-06_Estructura_datos_javascript.png?alt=media&token=f996b399-1575-4927-9d13-6a933fbb8412',
        entityName: 'Platzi',
        completed: new Date('2022-05-06T04:00:00'),
        categoryId: 5
    },
    {
        id: 39,
        name: 'Curso Gestión Dependencias NPM',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2022-03-13_Gestion_Dependencias_NPM.pdf?alt=media&token=e6fbe681-2f83-466d-b759-830cfa8cae51',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2022-03-13_Gestion_Dependencias_NPM.png?alt=media&token=b628f119-145f-4b83-8a04-09979275f224',
        entityName: 'Platzi',
        completed: new Date('2022-03-13T03:00:00'),
        categoryId: 5
    },
    {
        id: 38,
        name: 'Curso Introducción a la terminal',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2022-02-10_Introduccion_terminal.pdf?alt=media&token=3b71e72d-6338-46c9-b00d-0c0df97420b1',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2022-02-10_Introduccion_terminal.png?alt=media&token=93325ef9-7079-4e4a-aa2c-9c9cbfd5f6ee',
        entityName: 'Platzi',
        completed: new Date('2022-02-10T03:00:00'),
        categoryId: 5
    },
    {
        id: 37,
        name: 'Curso de Prework en Windows',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2022-01-24_Configuracion_Entorno_Windows.pdf?alt=media&token=ccb54fb2-cb1b-4626-bee5-67a72d6668ef',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2022-01-24_Configuracion_Entorno_Windows.png?alt=media&token=a496bb06-61ec-48e0-a06d-72e8cee97331',
        entityName: 'Platzi',
        completed: new Date('2022-01-24T03:00:00'),
        categoryId: 5
    },
    {
        id: 36,
        name: 'Curso Closured y Scope JavaScript',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2021%2F2021-07-27_Closured%20y%20Scope%20en%20JavaScript.pdf?alt=media&token=611d485a-2afe-4ae0-9e10-72aea224f178',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2021%2F2021-07-27_Closured%20y%20Scope%20en%20JavaScript.png?alt=media&token=f6317da7-af34-4971-bc3b-627d17a4e614',
        entityName: 'Platzi',
        completed: new Date('2021-07-27T04:00:00'),
        categoryId: 5
    },
    {
        id: 35,
        name: 'Curso JavaScript Engine V8',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2021%2F2021-04-11_Javascript_Engine.pdf?alt=media&token=557a019c-d0ef-48c7-981f-e5fa43ba1d15',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2021%2F2021-04-11_Javascript_Engine.png?alt=media&token=1e90bfd1-ad23-4c83-b2d2-6eccae411c86',
        entityName: 'Platzi',
        completed: new Date('2021-04-11T04:00:00'),
        categoryId: 5
    },
    {
        id: 34,
        name: 'Curso de Java SE OOP',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2021%2F2021-04-05_Java_SE_OOP.pdf?alt=media&token=3b17d59a-6ce0-4d21-ae5e-3cfa6ab9103d',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2021%2F2021-04-05_Java_SE_OOP.png?alt=media&token=367eaa19-b9d5-4482-8a10-71624ccaf9f9',
        entityName: 'Platzi',
        completed: new Date('2021-04-05T04:00:00'),
        categoryId: 5
    },
    {
        id: 33,
        name: 'Curso Java Spring',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-12-04_Java-Spring.pdf?alt=media&token=d21802d9-dbce-4df6-9147-d1dc24606df8',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-12-04_Java-Spring.png?alt=media&token=b779fbdb-d5b7-4dd3-80ed-93a73436d663',
        entityName: 'Platzi',
        completed: new Date('2020-12-04T03:00:00'),
        categoryId: 5
    },
    {
        id: 32,
        name: 'Curso Java Persistencia SE',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-11-12_Java_Persistencia.pdf?alt=media&token=2b85e72b-8268-462e-9ed0-cbe6edd79331',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-11-12_Java_Persistencia.png?alt=media&token=6de49b65-e6da-44a3-bfd5-0af9f51e7dd1',
        entityName: 'Platzi',
        completed: new Date('2020-11-12T03:00:00'),
        categoryId: 5
    },
    {
        id: 31,
        name: 'Curso JavaScript Profesional',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-11-02_JavaScript_Profesional.pdf?alt=media&token=5c670246-b500-473a-9218-43edc43d6065',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-11-02_JavaScript_Profesional.png?alt=media&token=6f7e8bb3-5769-4857-8393-e618cdbaa779',
        entityName: 'Platzi',
        completed: new Date('2020-11-02T03:00:00'),
        categoryId: 5
    },
    {
        id: 30,
        name: 'Curso Frontend Developer',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-07-15_frontend-developer.pdf?alt=media&token=223e972b-3d0a-46b8-a5c6-e1d9cba41514',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-07-15_frontend-developer.png?alt=media&token=103c3691-6833-44ca-9020-5e1d8ac4861e',
        entityName: 'Platzi',
        completed: new Date('2020-07-15T04:00:00'),
        categoryId: 6
    },
    {
        id: 29,
        name: 'Curso de Angular',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-06-30_Angular_Escalab.pdf?alt=media&token=877f8e16-0962-4567-895a-b64e17879f07',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-06-30_Angular_Escalab.png?alt=media&token=840df629-2f48-44cb-9951-314c9922766a',
        entityName: 'Escalab',
        completed: new Date('2020-06-30T04:00:00'),
        categoryId: 6
    },
    {
        id: 28,
        name: 'Curso de Asincronismo JavaScript',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-06-27_Asincronismo-js.pdf?alt=media&token=fa35bc07-25a9-475c-adce-93ed7ff9e098',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-06-27_Asincronismo-js.png?alt=media&token=89a7e7f3-e30c-442a-ad09-a3d947e45e99',
        entityName: 'Platzi',
        completed: new Date('2020-06-27T04:00:00'),
        categoryId: 5
    },
    {
        id: 27,
        name: 'Curso de ECMAScript 6',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2020-06-22_Ecmascript-6.pdf?alt=media&token=082fde4e-93d4-4e88-90bb-56184fe01c8e',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2022%2F2020-06-22_Ecmascript-6.png?alt=media&token=17a77e9b-461d-4830-b937-9cad065cf318',
        entityName: 'Platzi',
        completed: new Date('2022-06-22T04:00:00'),
        categoryId: 5
    },
    {
        id: 26,
        name: 'Curso Fundamentos JavaScript',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-06-17_Fundamentos_JavaScript.pdf?alt=media&token=82a7c086-40d9-49bf-96b3-5e65575537b9',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-06-17_Fundamentos_JavaScript.png?alt=media&token=98d6a45e-75e9-49b4-8a60-0d17ebf7d7c1',
        entityName: 'Platzi',
        completed: new Date('2020-06-17T04:00:00'),
        categoryId: 5
    },
    {
        id: 25,
        name: 'Curso Básico JavaScript',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-05-28_Basico-javascript.pdf?alt=media&token=069e482e-cfc4-41f5-b5f2-ddf7a14be34f',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-05-28_Basico-javascript.png?alt=media&token=36c7db4f-9981-4e66-b80b-048bcd04c050',
        entityName: 'Platzi',
        completed: new Date('2020-05-28T04:00:00'),
        categoryId: 5
    },
    {
        id: 24,
        name: 'Curso de Angular',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-04-13_Angular.pdf?alt=media&token=d14b4a19-a3d4-4348-8f02-a3ab28961d85',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-04-13_Angular.png?alt=media&token=07679dc3-fab8-4f25-9d0e-09e5dcc301e9',
        entityName: 'Platzi',
        completed: new Date('2020-04-13T04:00:00'),
        categoryId: 6
    },
    {
        id: 23,
        name: 'Curso de Prework en MacOS',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-02-06_Prework.pdf?alt=media&token=3e6f415f-be31-4dc1-ade8-297322e4c8eb',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-02-06_Prework.png?alt=media&token=ab022a8f-d778-49b7-a4f8-4da4dac9d2c0',
        entityName: 'Platzi',
        completed: new Date('2020-02-06T03:00:00'),
        categoryId: 5
    },
    {
        id: 22,
        name: 'Curso de TypeScript Angular',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-01-07_Typescript-angular.pdf?alt=media&token=860bdb36-e523-481d-b5f1-2a176375cf4c',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2020%2F2020-01-07_Typescript-angular.png?alt=media&token=de3fb6f7-254d-43ae-b3b2-448f621ad773',
        entityName: 'Platzi',
        completed: new Date('2020-01-07T03:00:00'),
        categoryId: 5
    },
    {
        id: 21,
        name: 'Curso de Java Testing',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2019%2F2019-03-14_Java_Testing.pdf?alt=media&token=ca8647e5-55b5-4851-afc6-1472109d304d',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2019%2F2019-03-14_Java_Testing.png?alt=media&token=0f87a586-5d81-414d-a2b5-4b10d5ed1547',
        entityName: 'Platzi',
        completed: new Date('2019-03-14T03:00:00'),
        categoryId: 5
    },
    {
        id: 20,
        name: 'Curso de Java Hibernate y Spring',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2019%2F2019-02-06_HIbernate%20y%20Java%20Spring.pdf?alt=media&token=b537b0ac-fb5d-4f83-b9ad-c1f28ceb3add',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2019%2F2019-02-06_HIbernate%20y%20Java%20Spring.png?alt=media&token=99a39251-4595-4307-ba01-2d14da1778bc',
        entityName: 'Platzi',
        completed: new Date('2019-02-06T03:00:00'),
        categoryId: 5
    },
    {
        id: 19,
        name: 'Curso Responsive Design',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-12-26_Responsive_Design.pdf?alt=media&token=eddeaded-96d6-4e49-95ba-7f8793f0b05f',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-12-26_Responsive_Design.png?alt=media&token=b9d04a5a-d897-4edc-ab06-bd4161aec2eb',
        entityName: 'Platzi',
        completed: new Date('2018-12-26T03:00:00'),
        categoryId: 6
    },
    {
        id: 18,
        name: 'Curso CSS Grid Layout',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-11-26_CSS_Grid_Layout.pdf?alt=media&token=8b5db16e-01ff-4905-bb05-5effcc914127',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-11-26_CSS_Grid_Layout.png?alt=media&token=6a2fc08b-140a-460f-93e5-72514d005c3b',
        entityName: 'Platzi',
        completed: new Date('2018-11-26T03:00:00'),
        categoryId: 6
    },
    {
        id: 17,
        name: 'Curso de Desarrollo Web',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-10-15_Desarrollo_Web_Online.pdf?alt=media&token=8dbaafde-2ef1-4ad6-8ea5-eaa938ca479a',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-10-15_Desarrollo_Web_Online.png?alt=media&token=684f5109-15bf-44db-b02e-52785f4de756',
        entityName: 'Platzi',
        completed: new Date('2018-10-15T03:00:00'),
        categoryId: 6
    },
    {
        id: 16,
        name: 'Curso de Java Avanzado SE',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-06-18_Curso_Java_SE.pdf?alt=media&token=de28dcc9-2cf6-4c94-a730-62a90296c6ed',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-06-18_Curso_Java_SE.png?alt=media&token=a2b5b33a-09b7-40c5-bce1-cbefa18bf50f',
        entityName: 'Platzi',
        completed: new Date('2018-06-18T04:00:00'),
        categoryId: 5
    },
    {
        id: 15,
        name: 'Curso Profesional de Java EE',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-02-15_Java_Profesional.pdf?alt=media&token=edb26435-5b93-4cf1-9c0f-37559e913ae1',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-02-15_Java_Profesional.png?alt=media&token=f82da9bd-64cc-45bb-a236-a389d1588249',
        entityName: 'Platzi',
        completed: new Date('2018-02-15T03:00:00'),
        categoryId: 5
    },
    {
        id: 14,
        name: 'Curso Básico de Java SE',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-01-07_Java_Basico.pdf?alt=media&token=4ca55aad-d6cb-46d1-a67a-6eb5ee59aa17',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2018%2F2018-01-07_Java_Basico.png?alt=media&token=91f407e5-bb6d-4de6-a686-0aa2e8b72469',
        entityName: 'Platzi',
        completed: new Date('2018-01-07T03:00:00'),
        categoryId: 5
    },
    {
        id: 13,
        name: 'Curso Profesional Git y Github',
        pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2017%2F2017-12-27_Git_y_Github.pdf?alt=media&token=3ac9ee78-4d6f-4c88-9af3-74f40a8172a9',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2017%2F2017-12-27_Git_y_Github.png?alt=media&token=73fa24a2-2ba3-42f0-98d7-ca3d9fc1a64b',
        entityName: 'Platzi',
        completed: new Date('2017-12-27T03:00:00'),
        categoryId: 5
    }
];

// Insertar certificados en la base de datos
for (const cert of certificates) {
  await prisma.certificate.upsert({
    where: { id: cert.id },
    update: {},
    create: {
      ...cert,
      createdAt: now,
      updatedAt: now,
      createdBy: user,
      updatedBy: user
    }
  });
}

console.log('✅ Certificates seeded successfully');
}

// 🛠️ Seed: Technologies
const technologies = [
  { id: 1, name: 'Git', version: null },
  { id: 2, name: 'HTML5', version: '' },
  { id: 3, name: 'CSS3', version: null },
  { id: 4, name: 'Maven', version: null },
  { id: 5, name: 'Gradle', version: null },
  { id: 6, name: 'Java', version: '8' },
  { id: 7, name: 'Java', version: '11' },
  { id: 9, name: 'Hibernate', version: null },
  { id: 10, name: 'Spring Framework', version: null },
  { id: 11, name: 'Springboot', version: null },
  { id: 12, name: 'Spring Data JPA', version: null },
  { id: 13, name: 'Spring Security', version: null },
  { id: 14, name: 'Oracle', version: null },
  { id: 15, name: 'PostgreSQL', version: null },
  { id: 17, name: 'PL/SQL', version: null },
  { id: 18, name: 'Jenkins', version: null },
  { id: 19, name: 'Spring Web', version: null },
  { id: 20, name: 'JavaScript', version: null },
  { id: 21, name: 'TypeScript', version: null },
  { id: 22, name: 'Angular', version: '8' },
  { id: 23, name: 'Angular', version: '12' },
  { id: 24, name: 'Angular', version: '13' },
  { id: 25, name: 'Angular', version: '15' },
  { id: 27, name: 'Github', version: null },
  { id: 28, name: 'Bitbucket', version: null },
  { id: 29, name: 'Gitlab', version: null },
  { id: 31, name: 'AWS S3', version: null },
  { id: 33, name: 'Firebase Hosting', version: null },
  { id: 34, name: 'Firebase Storage', version: null },
  { id: 35, name: 'Firebase Database', version: null },
  { id: 36, name: 'Firebase Authentication', version: null },
  { id: 37, name: 'ExtJS', version: '5' },
  { id: 38, name: 'Bootstrap', version: null },
  { id: 39, name: 'REST', version: null },
  { id: 40, name: 'Angular Material', version: null },
  { id: 41, name: 'Heroku', version: null },
  { id: 42, name: 'TailwindCSS', version: null },
  { id: 43, name: 'Microsoft Access', version: null },
  { id: 44, name: 'SQL Server 2012', version: null },
  { id: 45, name: 'T-SQL', version: null },
  { id: 50, name: 'Azure', version: null },
  { id: 51, name: 'OpenAI Assistant', version: null },
  { id: 52, name: 'Azure Functions', version: null }
];

for (const tech of technologies) {
  await prisma.technology.upsert({
    where: { id: tech.id },
    update: {},
    create: {
      ...tech,
      createdAt: now,
      updatedAt: now,
      createdBy: user,
      updatedBy: user
    }
  });
}

console.log('✅ Technologies seeded successfully');

// 🧠 Seed: Portfolios
const portfolios = [
  {
    id: 18,
    portfolioName: 'Publicador de Noticias',
    clientName: 'Banco Santander',
    img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FPublicador_Noticias.png?alt=media&token=1c4b65ac-45c8-4b2b-983f-1a90202c0a3a',
    description: 'Publicador de Noticias es una aplicación web desarrollada con Angular para el frontend y una arquitectura low code en el backend, utilizando Spring Boot y Apache Camel.\nEste proyecto fue solicitado por el área de Comunicaciones de Banco Santander con el objetivo de proporcionar una plataforma para la difusión de noticias, beneficios y convenios dirigidos a los colaboradores internos del banco, quienes acceden a la información a través de una aplicación móvil.\n\nLa aplicación permite gestionar publicaciones de manera eficiente, desde la creación de contenido hasta su distribución.\nEntre sus principales funcionalidades, se incluyen:\n\t- Creación de publicaciones con título, bajada y descripción.\n\t- Carga de imágenes y adjuntos.\n\t- Configuración de visibilidad para audiencias específicas.\n\t- Programación de fechas de publicación.\n\t- Previsualización de cómo se verá la noticia en un dispositivo móvil.\n\nAunque el desarrollo de la aplicación parecía sencillo en términos técnicos, el proyecto presentó dos grandes desafíos:\n\t1. Mejora de los requerimientos iniciales: Como equipo, logramos no solo cumplir con lo solicitado, sino optimizar significativamente la solución propuesta en comparación con la idea original del cliente.\n\t2. Reestructuración del equipo y cambio metodológico: Iniciamos con un equipo de cinco desarrolladores, pero antes de comenzar el desarrollo, dos compañeros fueron desvinculados, reduciendo el equipo a solo tres.\n\tAdemás, migramos nuestra metodología de trabajo de Kanban a Scrum, lo que representó un reto adicional, especialmente para quienes no tenían experiencia previa en este marco de trabajo.\n\nA pesar de estos obstáculos, logramos adaptarnos rápidamente.\nLa implementación de Scrum resultó ser un acierto, ya que permitió distribuir la carga de trabajo de manera equitativa, asegurando que todos tuviéramos la misma cantidad de puntos en cada sprint.\nEsto no solo optimizó la productividad, sino que también fortaleció la colaboración dentro del equipo.\n\nNo solo cumplimos con los plazos establecidos, sino que incluso tuvimos la oportunidad de apoyar al equipo encargado de la aplicación móvil.\nPara ello, externalizamos algunos de nuestros servicios a través de APIGee, facilitando la integración y mejorando la experiencia del usuario final.\n\nEn definitiva, el Publicador de Noticias no solo es una herramienta funcional y eficiente, sino también el resultado de un equipo que supo superar desafíos, adaptarse al cambio y entregar un producto de alto valor para el banco.',
    repository: '',
    demo: '',
    startDate: new Date("2024-09-09T04:00:00"),
    endDate: new Date("2024-12-13T04:00:00"),
    publishDate: new Date("2025-03-01T23:08:07"),
    categoryId: 9
  },
  {
    id: 17,
    portfolioName: 'Asistente Virtual IA',
    clientName: 'Banco Santander',
    img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FVirtaul%20Assistant%20IA.jpg?alt=media&token=857e2208-bc1c-4d10-a614-9a7023462818',
    description: 'El mundo empresarial demanda soluciones ágiles e innovadoras, y en Banco Santander surgió la oportunidad de desarrollar un Asistente Virtual con IA para los colaboradores internos. La misión era clara: ofrecer una herramienta que resolviera de manera eficiente dudas y consultas relacionadas con recursos humanos, tales como:\n\n\t✔️ Periodos de vacaciones\n\t✔️ Bonos y beneficios\n\t✔️ Solicitud de permisos\n\t✔️ Otras gestiones internas\n\nEl Enfoque Tecnológico\nPara garantizar una solución robusta, se planteó una arquitectura basada en tecnologías de vanguardia:\n\n\t🔹 Azure + OpenAI Assistant: Se eligió esta herramienta por su facilidad de configuración y su enfoque en asistentes virtuales.\n\t🔹 Spring Boot + Apache Camel: Desarrollo backend con enfoque low-code, asegurando integración con los sistemas internos.\n\t🔹 APIGee: Para externalizar los servicios y permitir la comunicación segura con redes externas.\n\t🔹 Angular: Desarrollo del Chat Virtual como un componente embebido en la plataforma de Recursos Humanos.\n\nEl Giro Inesperado\nA pesar del gran avance del proyecto, se recibió la orden de detenerlo. ¿El motivo? Desde Santander España ya se estaba desarrollando una solución similar, por lo que se decidió unificar esfuerzos a nivel global.\n\nSin embargo, esta experiencia marcó un antes y un después en mi carrera.\n\nMi Rol como Líder Técnico\nEste fue mi primer proyecto como Líder Técnico dentro del banco, un rol que implicó enfrentar múltiples desafíos, entre ellos:\n\n\t🚀 Diseñar la solución técnica junto con los arquitectos.\n\t📢 Presentar la propuesta en diversas mesas de aprobación del banco.\n\t🛠️ Validar tecnologías emergentes, como OpenAI Assistant, y compararlas con la IA convencional de ChatGPT.\n\t💡 Negociar costos y viabilidad del proyecto con diferentes áreas del banco.\n\t🎤 Desarrollar habilidades de comunicación y liderazgo, presentando la iniciativa ante directivos y equipos de alto nivel.\n\nEl Aprendizaje\nAunque el proyecto no llegó a producción, la experiencia fue invaluable. Aprendí a liderar, negociar, presentar y defender ideas, además de fortalecer mis habilidades técnicas y de comunicación.\n\nEste fue un recordatorio de que, en tecnología, no solo importa el producto final, sino también el camino recorrido y el crecimiento personal y profesional que obtenemos en el proceso.\n\n💡 A veces los proyectos se detienen, pero el aprendizaje nunca se pierde.',
    repository: '',
    demo: '',
    startDate: new Date("2024-03-01T04:00:00"),
    endDate: new Date("2024-11-23T04:00:00"),
    publishDate: new Date("2025-03-01T23:08:07"),
    categoryId: 9
  },
  {
        id: 16,
        portfolioName: 'Vacaciones',
        clientName: 'Banco Santander',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FVacaciones.png?alt=media&token=0228cbf1-636e-4828-ba86-d962eff0bc2a',
        description: 'En este proyecto, participé en la migración de un sistema de solicitud de vacaciones para los colaboradores del Banco Santander, actualizando una aplicación antigua desarrollada en C# y ASP.NET a una versión moderna utilizando tecnologías actuales. La actualización involucró la utilización de Java 11 con Spring Boot para el backend y Angular 12 para el frontend.\n\nFuncionalidades del Sistema:\n1.\tEl sistema renovado incluye varias funcionalidades clave para la gestión de las solicitudes de vacaciones:\n2.\tSolicitud de Vacaciones: Los colaboradores pueden realizar solicitudes de vacaciones de manera sencilla.\n3.\tSolicitud de Bonos: Los colaboradores tienen la opción de solicitar un bono si cumplen con un mínimo de días de vacaciones establecidos.\n4.\tReversa de Solicitud: Posibilidad de cancelar solicitudes de vacaciones previamente realizadas.\n5.\tHistorial de Solicitudes: Acceso al historial completo de solicitudes de vacaciones de cada colaborador.\n6.\tNotificaciones por Correo Electrónico: Envío automático de correos electrónicos al supervisor del colaborador para la aprobación o rechazo de las solicitudes de vacaciones.\n\nMi principal función en este proyecto fue en el área de frontend. Tuve que adaptarme rápidamente al proyecto, ya que el equipo estaba trabajando contra el reloj para cumplir con los plazos de entrega, esto debido a que ingresé al equipo en medio del desarrollo de este producto. A pesar de estos desafíos, logré integrarme eficazmente y contribuir significativamente al éxito del proyecto.\n\nUna vez entregada la aplicación, tuve que saldar una deuda técnica mencionada por el arquitecto, la cual consistía en dejar de enviar correos por medio de un servidor SMTP y utilizar un microservicio realizado por otro equipo para la gestión de envío de correos. Este ajuste mejoró la modularidad y eficiencia del sistema de notificaciones.\n\nAlgunos de los logros que quiero destacar son:\n1.\tAdaptación Rápida: Logré adaptarme rápidamente a las tecnologías y a las necesidades del proyecto, garantizando que el trabajo se realizara de manera eficiente y efectiva.\n2.\tEntrega Exitosa: Contribuí a cumplir con los tiempos de entrega establecidos, logrando satisfacer las expectativas del Product Owner, Tech Lead y Scrum Master.\n3.\tCumplimiento de Expectativas: Mi trabajo en el frontend fue reconocido por su calidad y eficiencia, alineándose perfectamente con los requisitos y expectativas del equipo de liderazgo del proyecto.\n\nEste proyecto no solo me permitió fortalecer mis habilidades técnicas en Angular, sino también demostrar mi capacidad para trabajar bajo presión y adaptarme rápidamente a nuevos entornos de trabajo. La colaboración y el cumplimiento de los objetivos del equipo fueron clave para el éxito de esta migración, lo que resultó en un sistema más moderno y eficiente para los colaboradores del Banco Santander.',
        repository: '',
        demo: '',
        startDate: '2023-07-16T04:00:00',
        endDate: '2023-09-01T04:00:00',
        publishDate: '2024-05-26T23:08:07',
        categoryId: 9
    },
    {
        id: 15,
        portfolioName: 'Control de Presupuesto',
        clientName: 'Red MegaCentro',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FMegaCentro.png?alt=media&token=3304fad1-800d-4a14-aeae-39fa25c1f615',
        description: 'Como parte de 42Labs,  tuvims que realziar una colaboración con MegaCentro Perú, donde llevé a cabo un proyecto de ingeniería inversa centrado en un software de gestión de bodega desarrollado en Microsoft Access. El objetivo principal fue comprender a fondo la estructura y funcionalidades del aplicativo para proporcionar mejoras y documentación exhaustiva.\n\nEl proceso inició con reuniones detalladas con el cliente, MegaCentro Perú, donde se recibió información esencial sobre el software existente. Este, específicamente diseñado para la gestión de bodegas y la elaboración de presupuestos de construcción, presentaba desafíos debido a su complejidad y a la falta de documentación clara.\n\nMi labor consistió en realizar una ingeniería inversa del aplicativo. Esto implicó una exhaustiva inspección de la base de datos subyacente para identificar las tablas, campos y tipos de datos utilizados. El propósito era comprender la estructura de la información almacenada y facilitar la creación de descripciones detalladas para los usuarios finales. Además, llevé a cabo una inspección a fondo de la interfaz de usuario y funcionalidades de la aplicación. Esta evaluación minuciosa permitió la creación de un manual de usuario completo, que detallaba de manera clara y concisa los procesos y pasos para maximizar la eficiencia en el uso del software.\n\nEn paralelo, mi jefe de proyecto lideró la creación de diagramas correspondientes que visualizaban la arquitectura y relaciones del software. Estos diagramas fueron esenciales para comprender la lógica de negocio y garantizar una implementación coherente de mejoras.\n\nEl proyecto culminó con éxito, cumpliendo con las expectativas del cliente. La entrega de mejoras sustanciales, el manual de usuario detallado y los diagramas visuales proporcionaron una solución integral que optimizó la experiencia del usuario. La satisfacción del cliente al final del proyecto destacó la efectividad de la ingeniería inversa aplicada y la capacidad para brindar soluciones prácticas a desafíos complejos. Este proyecto ahora forma parte integral de mi portafolio, destacando mi habilidad para abordar proyectos de ingeniería inversa con éxito y generar valor añadido para los clientes.',
        repository: '',
        demo: '',
        startDate: '2023-06-18T04:00:00',
        endDate: '2023-07-27T04:00:00',
        publishDate: '2023-12-27T15:16:07',
        categoryId: 9
    },
    {
        id: 14,
        portfolioName: 'Trello Clone',
        clientName: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FTrello-clone.png?alt=media&token=2e17e5bf-64ea-4c46-bc8f-9a721f464c89',
        description: 'Este proyecto representa una travesía en la que emprendí como parte de un curso especializado en maquetación con Angular CDK y TailwindCSS. Es por eso que me gustaría expresar y compartir los conocmientos adquiridos en el proceso. A medida que avanzaba en el curso, quedaba cada vez más asombrado por la potencia y versatilidad que ofrece Angular CDK. Lo más notable es la capacidad de integrar estos componentes directamente en mi aplicación sin comprometer el diseño general, gracias al uso sin complicaciones de TailwindCSS, un framework de estilos que se integra perfectamente con Angular. \n\nDentro de las herramientas y componentes que exploré y dominé en este curso, se encuentran: \n\n1. Overlay: Descubrí cómo crear superposiciones elegantes, ideales para ventanas emergentes y notificaciones. Esta funcionalidad proporciona una forma sencilla pero efectiva de comunicarse con el usuario de manera clara y visualmente atractiva. \n2. Modals: Aprendí a implementar ventanas modales de manera eficaz, un aspecto fundamental para mejorar la interacción del usuario. La capacidad de presentar información adicional o realizar acciones específicas en un formato modal contribuye significativamente a la usabilidad de la aplicación. \n3. Tables: Me sumergí en la creación de tablas dinámicas y personalizables que permiten mostrar datos de manera ordenada y fácilmente comprensible. La versatilidad de estas tablas resulta esencial para la presentación efectiva de información en diversos contextos. \n4. Acordeones: Exploré el diseño de acordeones que posibilitan mostrar u ocultar contenido de forma intuitiva. Esta funcionalidad es especialmente útil cuando se trata de organizar y presentar información de manera estructurada, mejorando la experiencia del usuario. .\n5. Drag and Drop: Una de las partes más emocionantes del curso fue aprender a implementar la funcionalidad de arrastrar y soltar de manera eficiente. Esta capacidad ofrece una experiencia de usuario fluida y agradable, permitiendo a los usuarios interactuar de manera natural con los elementos de la interfaz. \n\nEn resumen, este proyecto no solo representó un desafío estimulante, sino que también proporcionó una experiencia valiosa en la creación de interfaces de usuario utilizando Angular CDK y TailwindCSS. La integración de estos componentes no solo enriqueció mis habilidades de desarrollo web, sino que también abrió nuevas perspectivas sobre la creación de experiencias de usuario impactantes y eficientes.',
        repository: 'https://github.com/crisortegamunoz/trello-clone',
        demo: 'https://trello-clone-4b581.web.app/',
        startDate: '2023-06-01T04:00:00',
        endDate: '2023-06-09T04:00:00',
        publishDate: '2023-09-03T02:07:18',
        categoryId: 10
    },
    {
        id: 13,
        portfolioName: 'Platzi Store',
        clientName: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2Fplatzi-store.png?alt=media&token=c6ebc84e-c3a6-495a-938f-24a49f9cb783',
        description: 'Platzi Store representa una simulación de una plataforma de comercio electrónico, diseñada específicamente para ser utilizada como proyecto práctico en los cursos iniciales de Angular. Estos cursos abarcan una amplia gama de conceptos fundamentales, desde los aspectos básicos hasta temas más avanzados como la comunicación efectiva entre componentes, el consumo de servicios mediante APIs, la implementación de técnicas como Lazy Loading y la modularización del código, entre otros. \n\nEste proyecto se ha revelado como una herramienta invaluable para consolidar y revisitar los fundamentos esenciales de Angular. En mi caso, que previamente me había enfocado y especializado principalmente en el desarrollo del backend, Platzi Store me brindó la oportunidad de reforzar mis conocimientos en el ámbito del frontend. La aplicación práctica de estos conceptos en un entorno de comercio electrónico simulado ha añadido un valor significativo a mi comprensión general de Angular y su aplicación en proyectos del mundo real.',
        repository: 'https://github.com/crisortegamunoz/platzi-store-angular',
        demo: 'https://yarnstore-e4716.web.app/',
        startDate: '2023-05-01T04:00:00',
        endDate: '2023-05-26T04:00:00',
        publishDate: '2023-09-03T01:49:20',
        categoryId: 10
    },
    {
        id: 12,
        portfolioName: 'Seguros Generales',
        clientName: 'CLAVE - Tecnología',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FPAC.png?alt=media&token=8fe3220e-cf67-4af6-8076-c223b41e50ca',
        description: 'Parte de Kinetyc Platform, en contraste con el módulo de Líneas Comerciales, conocido como \"PAC\', se centra en procesos de autoatención destinados a clientes y canales relacionados con la cotización, propuesta, suscripción y emisión de seguros generales. Es crucial destacar que los usuarios finales pueden llevar a cabo este flujo específicamente mediante el acceso a través de una campaña comercial. \n\n Mi participación en este proyecto inició en calidad de desarrollador FullStack, abarcando tareas de mantenimiento y la creación de nuevas funcionalidades. Más adelante, asumí un papel más integral en la aplicación al participar directamente en reuniones con el cliente. Esto me llevó a analizar la factibilidad de los requerimientos y a evaluar la implementación de estos en la plataforma. Además, asumí la responsabilidad de liderar un equipo, asignando tareas una vez creadas las historias de usuario. \n\n Dentro de mis logros notables, destaca la optimización significativa de los tiempos de respuesta en diversos servicios, logrando reducciones de tiempo que oscilaron entre un 30% y un 70%, dependiendo del servicio. Asimismo, contribuí a fortalecer la relación con el cliente al entregar los requerimientos solicitados en los plazos acordados. \n\n Enfrenté uno de los mayores desafíos al asumir el rol de líder técnico, experimentando el síndrome del impostor al principio, ya que no me sentía completamente preparado. Con el tiempo, fortalecí mi posición y lideré mejoras importantes para el equipo. Esto incluyó la optimización de la inducción de nuevos desarrolladores y la promoción de un ambiente de trabajo más positivo. Este último aspecto es particularmente significativo, ya que el estado de ánimo del equipo experimentó mejoras sustanciales.',
        repository: '',
        demo: '',
        startDate: '2021-08-09T04:00:00',
        endDate: '2023-05-31T04:00:00',
        publishDate: '2023-09-02T15:41:45',
        categoryId: 9
    },
    {
        id: 11,
        portfolioName: 'Siniestros',
        clientName: 'CLAVE - Tecnología',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FCLL.png?alt=media&token=e3fc1f0b-63b8-41b3-93d9-dfb1a3d8dac4',
        description: 'Es un Módulo de Kinetyc PAS Life, orientado a la gestión de denuncias y siniestros relacionados con seguros de vida y salud individual. Su funcionalidad se centra en simplificar la administración de datos mediante la creación de una bitácora y el control efectivo de los plazos de liquidación.\n\nEn mi participación en este proyecto, mi enfoque principal fue la optimización de los tiempos de respuesta de la aplicación. Implementé la integración con una API dedicada a la creación de roles asociados a denuncias y siniestros, refactore los controladores del frontend y mejoré el proceso de carga de archivos estáticos.\n\nConsidero que uno de mis mayores logros fue la adaptación ágil al modelo de negocio del módulo. Posteriormente, destaca la optimización de los tiempos de respuesta de la aplicación, logrando reducciones notables que oscilaron entre un 40% y un 80%. Esta mejora significativa no solo impulsó la eficiencia operativa, sino que también contribuyó a una experiencia más ágil y satisfactoria para los usuarios finales.',
        repository: '',
        demo: '',
        startDate: '2021-04-19T04:00:00',
        endDate: '2021-09-30T03:00:00',
        publishDate: '2023-09-02T15:38:28',
        categoryId: 9
    },
    {
        id: 10,
        portfolioName: 'Kamaleon',
        clientName: 'CLAVE - Tecnología',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FKML.png?alt=media&token=e407cfdf-0cd8-4b28-bd28-4bb7eb31971d',
        description: 'Esta aplicación revoluciona la personalización de aplicaciones web al proporcionar a los intermediarios la capacidad de adaptar completamente la interfaz a sus necesidades y campañas comerciales. Permite que un intermediario, al poseer una campaña comercial, gestione todo el proceso, desde la creación de cotizaciones hasta la obtención de pólizas completamente personalizadas con sus propios colores, logotipos, banners y tipografías exclusivas. Para ilustrar, si la empresa de seguros ”Fantasía” brinda este sistema a un intermediario como ”Seguros Verdes”, este último puede modificar la apariencia de la aplicación web. Al enviar enlaces para que sus clientes realicen cotizaciones, estos experimentarán la página con la identidad visual exclusiva de ”Seguros Verdes”, sin ninguna confusión sobre la asociación con ”Seguros Fantasía”.\n\nEn mi papel en este proyecto, trabajé en estrecha colaboración con el arquitecto para diseñar la base de datos. Además, lideré el desarrollo integral de la aplicación utilizando Java 11 y Spring Boot. Implementé con éxito una integración con Amazon S3 para almacenar los cambios realizados por los usuarios. También contribuí al proyecto desde el lado de Angular, aportando en el desarrollo de algunas funcionalidades clave.\n\nUno de los desafíos más significativos, que considero también un logro destacado, fue proponer y liderar el desarrollo del backend de este proyecto utilizando Spring Boot. Esta iniciativa se convirtió posteriormente en la base para la actualización de varias aplicaciones existentes dentro de la misma empresa. Además, se adoptó Spring Boot como tecnología obligatoria para futuros desarrollos. Esta decisión estratégica no solo mejoró la eficiencia del proyecto actual, sino que también marcó el camino hacia una evolución tecnológica más amplia para la empresa en futuros proyectos.',
        repository: '',
        demo: '',
        startDate: '2021-01-18T03:00:00',
        endDate: '2023-03-20T03:00:00',
        publishDate: '2023-09-02T15:34:34',
        categoryId: 9
    },
    {
        id: 9,
        portfolioName: 'Portafolio API 1.0',
        clientName: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FPortfolio-api-v2.png?alt=media&token=18295885-4894-416e-ab60-6b0928aa6456',
        description: 'Después de completar un curso de Java Spring Boot, sentí la necesidad de aplicar mis conocimientos en un proyecto propio para consolidar y profundizar mi comprensión de la tecnología. Reconociendo que la práctica es fundamental para el aprendizaje continuo, decidí llevar a cabo una mejora en mi portafolio, abandonando el uso de Firebase Database y optando por desarrollar una aplicación backend en Java.\n\nEl proceso fue fascinante, desde la conceptualización y diseño de un modelo de bases de datos relacional para la gestión de la información hasta la exposición de los datos mediante una API Rest. El conjunto tecnológico utilizado para este desafío personal incluyó herramientas como Gradle, Java 11 (OpenJDK), PostgreSQL para el almacenamiento de datos, y varios proyectos de Spring, entre ellos Spring JPA Repository, Web, Security, entre otros.\n\nPara la implementación y despliegue de la aplicación en la web, elegí la plataforma Heroku. Es importante mencionar que, aunque anteriormente estaba disponible, en la actualidad la aplicación no se encuentra accesible debido a cambios en las políticas de Heroku, que ahora conllevan costos por el uso de algunos de sus servicios.\n\nEste proyecto no solo representó una oportunidad emocionante para aplicar y consolidar mis conocimientos en Spring Boot, sino que también me permitió enfrentar desafíos reales relacionados con el diseño de bases de datos, el desarrollo de una API eficiente y la implementación en una plataforma de alojamiento en la nube. A pesar de la indisponibilidad actual, la experiencia adquirida ha sido invaluable para mi crecimiento como desarrollador.',
        repository: null,
        demo: 'https://portfolio-crisortega.web.app/',
        startDate: '2020-10-05T03:00:00',
        endDate: '2020-12-07T03:00:00',
        publishDate: '2023-09-02T15:32:59',
        categoryId: 11
    },
    {
        id: 8,
        portfolioName: 'Portafolio 2.0',
        clientName: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2Fportfolio-angular-v1.png?alt=media&token=f15bf556-282f-4d26-b79c-1a663107c630',
        description: 'Este proyecto surge como respuesta a la problemática de gestionar un portafolio estático. La inconveniencia de tener que modificar constantemente archivos HTML, JavaScript y otros para agregar nuevos proyectos, imágenes, certificaciones o simplemente editar texto, motivó el desarrollo de un sistema de gestión de contenidos (CMS) para simplificar la publicación de contenido en mi sitio web.\n\nEn el frontend, opté por utilizar Angular 8 para ambas secciones del proyecto. Una sección estaba diseñada para presentar información a los visitantes del sitio, y la otra estaba destinada a la administración interna. Para el estilo, empleé Bootstrap en la sección pública y Angular Material en la sección administrativa.\n\nEn cuanto al backend, decidí utilizar Firebase, aprovechando sus diversas herramientas. Firebase Hosting se utilizó para alojar el sitio, Firebase Storage para almacenar imágenes diversas empleadas en el sitio, y Firebase Database para guardar la información mostrada en el sitio web.\n\nLamentablemente, tuve que dar de baja este portafolio por diversos motivos, siendo el principal la pérdida de mi cuenta de GitHub. Cuando finalmente recuperé las fuentes, había pasado demasiado tiempo, y la versión de Angular estaba considerablemente deprecada. En lugar de mantener una versión obsoleta, opté por darle un aspecto más fresco al sitio con una nueva versión y un diseño renovado.',
        repository: 'https://github.com/crisortegamunoz/fisrt-portoflio-angular',
        demo: 'https://portfolio-crisortega.web.app/',
        startDate: '2020-05-29T04:00:00',
        endDate: '2020-12-20T03:00:00',
        publishDate: '2023-09-02T15:16:00',
        categoryId: 11
    },
    {
        id: 7,
        portfolioName: 'Seguros Garantía',
        clientName: 'CLAVE - Tecnología',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FPAS.png?alt=media&token=a06babb7-010c-4e71-a39c-2ee9eaeea4dd',
        description: 'Es un módulo de Kinetyc Platform, conocido como ”PAS”, se enfoca en los procesos de autoatención de clientes y canales específicamente relacionados con la cotización, propuesta, suscripción y emisión de seguros de garantía. Es crucial destacar que los usuarios finales solo pueden llevar a cabo este flujo accediendo mediante una campaña comercial.\n\nMi participación en este proyecto comenzó como desarrollador FullStack, encargándome de la mantención y desarrollo de nuevas funcionalidades. Con el tiempo, evolucioné hacia el rol de líder técnico, asumiendo el control de la aplicación y participando activamente en reuniones directas con el cliente. Esta transición implicó analizar la factibilidad de los requerimientos del cliente y evaluar su implementación en la plataforma.\n\nEl desafío más significativo de este proyecto fue, como mencioné anteriormente, asumir el rol de líder técnico. Esto implicó liderar un equipo, asumir responsabilidades y asignar tareas a los desarrolladores.\n\nUno de mis mayores logros en este proyecto fue la optimización de los tiempos de respuesta en diversos servicios, logrando reducciones significativas que oscilaron entre un 30% y un 70%, dependiendo del servicio. Esta mejora no solo contribuyó a la eficiencia operativa, sino que también impactó positivamente en la experiencia general del usuario. La capacidad de liderazgo y la implementación exitosa de mejoras técnicas son aspectos que destacan en mi contribución a este proyecto.',
        repository: '',
        demo: '',
        startDate: '2020-04-20T04:00:00',
        endDate: '2023-05-31T04:00:00',
        publishDate: '2023-09-02T15:12:28',
        categoryId: 9
    },
    {
        id: 6,
        portfolioName: 'Campañas Comerciales',
        clientName: 'CLAVE - Tecnología',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2Fmkc.png?alt=media&token=043e6428-31ac-46a8-9b29-f9a9cd71d311',
        description: 'Es parte de plataforma Kinetyc, se centra en la creación de campañas comerciales basadas en convenios comerciales preconfigurados. Este módulo posibilita que una compañía de seguros presente una serie de productos en oferta a sus clientes, así como también permite a un intermediario proporcionar un enlace donde los clientes pueden visualizar y cotizar productos específicos.\n\nMi responsabilidad abarcó el desarrollo completo de esta aplicación, desde la implementación de servicios backend utilizando Spring Framework hasta el desarrollo del frontend con Angular 8 en sus primeras etapas. A medida que asumí la responsabilidad del equipo de mantenimiento, se llevaron a cabo actualizaciones y mejoras en la aplicación, incorporando nuevas funcionalidades y actualizando la versión de Angular 8 a la versión 13.\n\nEste proyecto marcó mi primera incursión profesional en Angular, y agradezco a la empresa que me proporcionó capacitación en Angular mediante un curso en la academia en línea ”Escalab”. Además, por iniciativa propia, realicé el curso de Angular ofrecido en Platzi para potenciar y mejorar mis habilidades rápidamente. Enfrentando este desafío de manera más efectiva, logré completar la entrega del proyecto dentro del plazo estimado.',
        repository: '',
        demo: '',
        startDate: '2020-03-16T03:00:00',
        endDate: '2023-05-31T04:00:00',
        publishDate: '2023-09-02T15:10:05',
        categoryId: 9
    },
    {
        id: 5,
        portfolioName: 'Rick & Morty',
        clientName: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FRick_And_Morty.png?alt=media&token=7b74d563-0d20-4a3e-8ce2-41a059ed2f4c',
        description: 'Este mini proyecto surge como resultado de una de las tareas asignadas durante el curso de Angular impartido por Escalab. De todas las tareas que tuve que desarrollar, este es mi favorito, ya que tuve la oportunidad de abordar un proyecto con pensamiento libre. Por esta razón, decidí utilizar la API de The Rick and Morty para crear un sitio de aplicación de una sola página (SPA) ambientado en esta serie animada.\n\n¿Por qué me gustó tanto? Las razones son simples. Principalmente, después de mucho tiempo, pude ”jugar” con el diseño de un sitio web utilizando HTML y CSS. Exploré y experimenté con algunos paquetes para mejorar el sitio, como un paginador para los personajes de la serie y un efecto de deslizamiento que utilicé como banner en la página web.\n\nAdemás, había leído previamente sobre Firebase, investigué más y lo apliqué en el proyecto utilizando una de sus herramientas llamada ”hosting” para proporcionar una demostración del sitio. De esta manera, cualquier persona podría ver el proyecto sin necesidad de descargar el código fuente desde mi GitHub.',
        repository: 'https://github.com/crisortegamunoz/CursoAngularLaEscalab/tree/master/Clase%204/rickandmorty',
        demo: 'https://rick-and-morty-api-desafio.web.app/',
        startDate: '2020-04-03T03:00:00',
        endDate: '2020-04-11T04:00:00',
        publishDate: '2023-09-02T15:05:39',
        categoryId: 10
    },
    {
        id: 4,
        portfolioName: 'Convenios Comerciales',
        clientName: 'CLAVE - Tecnología',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FPRA.png?alt=media&token=2f7575d4-97ee-407b-bd88-ea891b787d41',
        description: 'Parte de la plataforma Kinetyc, destinado al registro de las condiciones de comercialización con intermediarios destaca por permitir el registro de variables de tarificación y capacidades de venta en diversos formatos de relación comercial. Estos formatos involucran a los roles de asegurador, intermediario, contratante y asegurado.\n\nMi participación en este proyecto fue como desarrollador Fullstack, y lo que lo diferenció de otros proyectos fue la modalidad de trabajo, ya que el cliente solicitó que el equipo operara desde sus instalaciones. Esta fue mi primera experiencia trabajando como externo, lo que implicó adaptarme al entorno y colaborar directamente con los clientes.\n\nCon una mayor experiencia como desarrollador, asumí tareas de análisis de requerimientos y propuse ideas para mejorar la experiencia del usuario y la forma en que estábamos desarrollando el código. Esta experiencia no solo amplió mi conjunto de habilidades técnicas, sino que también me brindó la oportunidad de contribuir proactivamente al proceso de desarrollo, ofreciendo sugerencias y mejoras para optimizar la eficiencia y la usabilidad del sistema.',
        repository: '',
        demo: '',
        startDate: '2019-03-18T03:00:00',
        endDate: '2023-05-31T04:00:00',
        publishDate: '2023-09-02T05:30:32',
        categoryId: 9
    },
    {
        id: 3,
        portfolioName: 'Seguros de Vida',
        clientName: 'CLAVE - Tecnología',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FAGL.png?alt=media&token=afd789c6-33e5-4255-a479-60dfaa92c0bb',
        description: 'Módulo central de Kinetyc PAS Life, desempeña un papel crucial en el manejo integral de los procesos de cotización, propuesta, suscripción, emisión, plan de pago y endoso. AGL (Administración de Gestión de la Liquidación) contiene la base de pólizas y clientes asociados a ellas. El proceso de emisión se simplifica en una secuencia de cuatro pasos: Cotizar → Ingresar datos de propuesta → Ingresar datos de pago → Suscribir y emitir.\n\nMi rol en este proyecto fue como desarrollador FullStack. Aunque ya me había adaptado al framework frontend utilizado en la empresa, este proyecto marcó mi acercamiento profesional a Java y sus propios frameworks, como Hibernate y Spring.\n\nTodo lo que aprendí durante este proyecto se lo debo a un compañero de equipo llamado Jaime Cisternas, quien tuvo la paciencia de guiarme y enseñarme sobre metodologías de trabajo como los principios SOLID, así como asegurar la calidad del código. Gracias a sus enseñanzas, no solo mejoré mis habilidades de programación, sino que también comprendí el funcionamiento de Hibernate y Spring en proyectos Java de gran escala.\n\nQuisiera destacar lo que considero mi mayor logro en este proyecto: capacitar a los nuevos integrantes de la célula en el framework ExtJS. Este proceso no solo implicó transmitir conocimientos técnicos, sino también compartir la experiencia y las mejores prácticas adquiridas a lo largo del proyecto, contribuyendo así al crecimiento y desarrollo del equipo.',
        repository: '',
        demo: '',
        startDate: '2017-03-06T03:00:00',
        endDate: '2018-12-28T03:00:00',
        publishDate: '2023-09-02T01:41:58',
        categoryId: 9
    },
    {
        id: 2,
        portfolioName: 'Líneas Comerciales',
        clientName: 'CLAVE - Tecnología',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FAGC.png?alt=media&token=92d0066e-d1f0-4d8e-9c6d-23961c6e8905',
        description: 'Parte de Kinetyc Platform, orientado a los seguros de garantía y utilizado por intermediarios internos de una compañía, abarca todo el proceso de manejo de cotización, propuesta, suscripción, emisión, plan de pago y endoso. AGL contiene la base de pólizas y clientes asociados a ellos.\n\nDurante los años que trabajé en este proyecto, mi rol consistió en llevar a cabo mantenciones, mejoras y la implementación de nuevas funcionalidades al módulo para potenciar su uso. Enfrenté tareas desafiantes, particularmente relacionadas con la refactorización de código. Prácticamente, descomponer el proyecto en nuevos archivos estáticos fue esencial, ya que toda la funcionalidad del aplicativo estaba concentrada en dos controladores.\n\nConsidero mi mayor logro en este proyecto haber completado con éxito la tarea mencionada anteriormente. Esta acción no solo contribuyó a mejorar los tiempos de respuesta en la descarga de archivos estáticos, sino que también facilitó la vida de los nuevos desarrolladores que se unían al equipo. La legibilidad del código mejoró significativamente, haciendo que fuera más fácil de entender, lo que resultó en una experiencia de desarrollo más eficiente y efectiva especialmente para los desarrolladores nuevos que se integraban al proyecto.',
        repository: '',
        demo: '',
        startDate: '2016-10-10T03:00:00',
        endDate: '2023-05-31T04:00:00',
        publishDate: '2023-09-02T01:36:33',
        categoryId: 9
    },
    {
        id: 1,
        portfolioName: 'Kinetyc Cobranza',
        clientName: 'CLAVE - Tecnología',
        img: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fportfolio%2Fcrisortega%2FCOL.png?alt=media&token=f1657c4c-b32a-4934-8995-4ab5f19ab355',
        description: 'Parte de Kinetyc Platform, se centra en la gestión de procesos de activación de mandatos de cobros de pólizas, brindando soporte para diversos medios de pago automáticos como Transbank, entidades bancarias y Previred.\n\nEste proyecto marcó mi inicio como profesional y desarrollador junior, siendo mi primera experiencia en el mundo laboral. Tuve que enfrentar el estrés y la ansiedad al aprender rápidamente sobre Spring Framework, Hibernate y ExtJS.\n\nA medida que avanzaba en el proyecto, me adaptaba gradualmente a estas tecnologías, lo que aumentaba mi confianza y me permitía superar mis tareas. Es crucial destacar que el equipo siempre estuvo dispuesto a apoyarme en mis responsabilidades, brindándome enseñanzas sobre el negocio y las tecnologías. Sin duda, no habría logrado cumplir mis tareas sin su ayuda y paciencia.\n\nDesde mi perspectiva, las universidades deberían preparar de manera más efectiva a los estudiantes para enfrentar estas emociones. Asimismo, algunas empresas deberían ser conscientes de las necesidades de sus colaboradores juniors, proporcionándoles capacitación en las tecnologías que utilizan en lugar de ”lanzarlos a los leones”. Esto no solo beneficiaría a los empleados, sino que también contribuiría a mejorar la calidad del código y la eficiencia en el desarrollo de proyectos.',
        repository: '',
        demo: '',
        startDate: '2016-06-06T04:00:00',
        endDate: '2016-12-21T03:00:00',
        publishDate: '2023-09-02T01:28:43',
        categoryId: 9
    }
];

for (const p of portfolios) {
  await prisma.portfolio.upsert({
    where: { id: p.id },
    update: {},
    create: {
      ...p,
      createdAt: now,
      updatedAt: now,
      createdBy: user,
      updatedBy: user
    }
  });
}

console.log("✅ Portfolios seeded successfully");

// 🔗 Seed: PortfolioTechnology
const portfolioTechnologies = [
  { portfolioId: 18, technologyId: 1 },
  { portfolioId: 18, technologyId: 29 },
  { portfolioId: 18, technologyId: 18 },
  { portfolioId: 18, technologyId: 3 },
  { portfolioId: 18, technologyId: 2 },
  { portfolioId: 18, technologyId: 20 },
  { portfolioId: 18, technologyId: 21 },
  { portfolioId: 18, technologyId: 40 },
  { portfolioId: 18, technologyId: 23 },
  { portfolioId: 18, technologyId: 44 },
  { portfolioId: 18, technologyId: 45 },
  { portfolioId: 18, technologyId: 4 },
  { portfolioId: 18, technologyId: 7 },
  { portfolioId: 18, technologyId: 11 },
  { portfolioId: 18, technologyId: 19 },
  { portfolioId: 17, technologyId: 1 },
  { portfolioId: 17, technologyId: 29 },
  { portfolioId: 17, technologyId: 18 },
  { portfolioId: 17, technologyId: 3 },
  { portfolioId: 17, technologyId: 2 },
  { portfolioId: 17, technologyId: 20 },
  { portfolioId: 17, technologyId: 21 },
  { portfolioId: 17, technologyId: 40 },
  { portfolioId: 17, technologyId: 23 },
  { portfolioId: 17, technologyId: 44 },
  { portfolioId: 17, technologyId: 45 },
  { portfolioId: 17, technologyId: 4 },
  { portfolioId: 17, technologyId: 7 },
  { portfolioId: 17, technologyId: 11 },
  { portfolioId: 17, technologyId: 19 },
  { portfolioId: 17, technologyId: 50 },
  { portfolioId: 17, technologyId: 51 },
  { portfolioId: 17, technologyId: 52 },
  { portfolioId: 16, technologyId: 1 },
  { portfolioId: 16, technologyId: 29 },
  { portfolioId: 16, technologyId: 18 },
  { portfolioId: 16, technologyId: 3 },
  { portfolioId: 16, technologyId: 2 },
  { portfolioId: 16, technologyId: 20 },
  { portfolioId: 16, technologyId: 21 },
  { portfolioId: 16, technologyId: 40 },
  { portfolioId: 16, technologyId: 23 },
  { portfolioId: 16, technologyId: 44 },
  { portfolioId: 16, technologyId: 45 },
  { portfolioId: 16, technologyId: 4 },
  { portfolioId: 16, technologyId: 7 },
  { portfolioId: 16, technologyId: 11 },
  { portfolioId: 16, technologyId: 19 },
  { portfolioId: 15, technologyId: 43 },
  { portfolioId: 14, technologyId: 1 },
  { portfolioId: 14, technologyId: 27 },
  { portfolioId: 14, technologyId: 42 },
  { portfolioId: 14, technologyId: 21 },
  { portfolioId: 14, technologyId: 25 },
  { portfolioId: 14, technologyId: 40 },
  { portfolioId: 13, technologyId: 1 },
  { portfolioId: 13, technologyId: 27 },
  { portfolioId: 13, technologyId: 2 },
  { portfolioId: 13, technologyId: 3 },
  { portfolioId: 13, technologyId: 20 },
  { portfolioId: 13, technologyId: 21 },
  { portfolioId: 13, technologyId: 24 },
  { portfolioId: 13, technologyId: 33 },
  { portfolioId: 12, technologyId: 1 },
  { portfolioId: 12, technologyId: 28 },
  { portfolioId: 12, technologyId: 18 },
  { portfolioId: 12, technologyId: 4 },
  { portfolioId: 12, technologyId: 14 },
  { portfolioId: 12, technologyId: 17 },
  { portfolioId: 12, technologyId: 7 },
  { portfolioId: 12, technologyId: 11 },
  { portfolioId: 12, technologyId: 12 },
  { portfolioId: 12, technologyId: 13 },
  { portfolioId: 12, technologyId: 19 },
  { portfolioId: 12, technologyId: 2 },
  { portfolioId: 12, technologyId: 3 },
  { portfolioId: 12, technologyId: 38 },
  { portfolioId: 12, technologyId: 20 },
  { portfolioId: 12, technologyId: 21 },
  { portfolioId: 12, technologyId: 24 },
  { portfolioId: 12, technologyId: 31 },
  { portfolioId: 11, technologyId: 1 },
  { portfolioId: 11, technologyId: 28 },
  { portfolioId: 11, technologyId: 18 },
  { portfolioId: 11, technologyId: 4 },
  { portfolioId: 11, technologyId: 15 },
  { portfolioId: 11, technologyId: 9 },
  { portfolioId: 11, technologyId: 10 },
  { portfolioId: 11, technologyId: 39 },
  { portfolioId: 11, technologyId: 20 },
  { portfolioId: 11, technologyId: 37 },
  { portfolioId: 10, technologyId: 19 },
  { portfolioId: 10, technologyId: 2 },
  { portfolioId: 10, technologyId: 3 },
  { portfolioId: 10, technologyId: 38 },
  { portfolioId: 10, technologyId: 20 },
  { portfolioId: 10, technologyId: 21 },
  { portfolioId: 10, technologyId: 24 },
  { portfolioId: 10, technologyId: 34 },
  { portfolioId: 10, technologyId: 31 },
  { portfolioId: 9, technologyId: 1 },
  { portfolioId: 9, technologyId: 5 },
  { portfolioId: 9, technologyId: 15 },
  { portfolioId: 9, technologyId: 7 },
  { portfolioId: 9, technologyId: 11 },
  { portfolioId: 9, technologyId: 12 },
  { portfolioId: 9, technologyId: 13 },
  { portfolioId: 9, technologyId: 19 },
  { portfolioId: 9, technologyId: 41 },
  { portfolioId: 8, technologyId: 1 },
  { portfolioId: 8, technologyId: 27 },
  { portfolioId: 8, technologyId: 2 },
  { portfolioId: 8, technologyId: 3 },
  { portfolioId: 8, technologyId: 38 },
  { portfolioId: 8, technologyId: 20 },
  { portfolioId: 8, technologyId: 21 },
  { portfolioId: 8, technologyId: 22 },
  { portfolioId: 8, technologyId: 40 },
  { portfolioId: 8, technologyId: 33 },
  { portfolioId: 8, technologyId: 34 },
  { portfolioId: 8, technologyId: 35 },
  { portfolioId: 8, technologyId: 36 },
  { portfolioId: 7, technologyId: 1 },
  { portfolioId: 7, technologyId: 28 },
  { portfolioId: 7, technologyId: 2 },
  { portfolioId: 7, technologyId: 3 },
  { portfolioId: 7, technologyId: 20 },
  { portfolioId: 7, technologyId: 21 },
  { portfolioId: 7, technologyId: 4 },
  { portfolioId: 7, technologyId: 14 },
  { portfolioId: 7, technologyId: 18 },
  { portfolioId: 7, technologyId: 6 },
  { portfolioId: 7, technologyId: 9 },
  { portfolioId: 7, technologyId: 10 },
  { portfolioId: 7, technologyId: 31 },
  { portfolioId: 7, technologyId: 24 },
  { portfolioId: 7, technologyId: 39 },
  { portfolioId: 6, technologyId: 1 },
  { portfolioId: 6, technologyId: 28 },
  { portfolioId: 6, technologyId: 2 },
  { portfolioId: 6, technologyId: 3 },
  { portfolioId: 6, technologyId: 20 },
  { portfolioId: 6, technologyId: 21 },
  { portfolioId: 6, technologyId: 18 },
  { portfolioId: 6, technologyId: 4 },
  { portfolioId: 6, technologyId: 14 },
  { portfolioId: 6, technologyId: 6 },
  { portfolioId: 6, technologyId: 9 },
  { portfolioId: 6, technologyId: 10 },
  { portfolioId: 6, technologyId: 24 },
  { portfolioId: 6, technologyId: 39 },
  { portfolioId: 5, technologyId: 1 },
  { portfolioId: 5, technologyId: 27 },
  { portfolioId: 5, technologyId: 2 },
  { portfolioId: 5, technologyId: 3 },
  { portfolioId: 5, technologyId: 20 },
  { portfolioId: 5, technologyId: 21 },
  { portfolioId: 5, technologyId: 22 },
  { portfolioId: 5, technologyId: 33 },
  { portfolioId: 4, technologyId: 1 },
  { portfolioId: 4, technologyId: 28 },
  { portfolioId: 4, technologyId: 18 },
  { portfolioId: 4, technologyId: 4 },
  { portfolioId: 4, technologyId: 14 },
  { portfolioId: 4, technologyId: 6 },
  { portfolioId: 4, technologyId: 9 },
  { portfolioId: 4, technologyId: 10 },
  { portfolioId: 4, technologyId: 20 },
  { portfolioId: 4, technologyId: 37 },
  { portfolioId: 4, technologyId: 39 },
  { portfolioId: 3, technologyId: 1 },
  { portfolioId: 3, technologyId: 18 },
  { portfolioId: 3, technologyId: 28 },
  { portfolioId: 3, technologyId: 15 },
  { portfolioId: 3, technologyId: 4 },
  { portfolioId: 3, technologyId: 6 },
  { portfolioId: 3, technologyId: 9 },
  { portfolioId: 3, technologyId: 10 },
  { portfolioId: 3, technologyId: 20 },
  { portfolioId: 3, technologyId: 37 },
  { portfolioId: 3, technologyId: 39 },
  { portfolioId: 2, technologyId: 1 },
  { portfolioId: 2, technologyId: 28 },
  { portfolioId: 2, technologyId: 18 },
  { portfolioId: 2, technologyId: 14 },
  { portfolioId: 2, technologyId: 4 },
  { portfolioId: 2, technologyId: 6 },
  { portfolioId: 2, technologyId: 9 },
  { portfolioId: 2, technologyId: 10 },
  { portfolioId: 2, technologyId: 17 },
  { portfolioId: 2, technologyId: 20 },
  { portfolioId: 2, technologyId: 37 },
  { portfolioId: 2, technologyId: 39 },
  { portfolioId: 1, technologyId: 1 },
  { portfolioId: 1, technologyId: 28 },
  { portfolioId: 1, technologyId: 18 },
  { portfolioId: 1, technologyId: 6 },
  { portfolioId: 1, technologyId: 14 },
  { portfolioId: 1, technologyId: 4 },
  { portfolioId: 1, technologyId: 9 },
  { portfolioId: 1, technologyId: 10 },
  { portfolioId: 1, technologyId: 20 },
  { portfolioId: 1, technologyId: 37 },
];

for (const pt of portfolioTechnologies) {
  await prisma.portfolioTechnology.create({
    data: {
      ...pt,
      createdAt: now,
      updatedAt: now,
      createdBy: user,
      updatedBy: user
    }
  });
}

console.log("✅ PortfolioTechnology seeded successfully");

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });