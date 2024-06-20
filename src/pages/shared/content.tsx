
const chessDesc = `An advanced multiplayer chess application, leveraging a cutting-edge
technology stack. This robust platform enables users to create, join, and
password-protect game rooms, ensuring an engaging and secure user
experience. The front-end is crafted using Vite, Zustand for state management,
along with JavaScript, TypeScript, and SCSS. The back-end architecture is built
on Express and utilizes Socket.io for real-time communication, UUID for unique
identifiers, and CORS to handle cross-origin requests. Deployed on Linode.
`;

const mirkoDesc = `A user-friendly chat application with JavaScript, React, Zustand, Express,
and Socket.io. Features include user registration, login, and seamless
communication. Stores user data and conversation history securely.
`;

const toDoDesc = `A simple ToDo app that allows users to add, remove, and edit tasks. 
Tasks can be sorted by status or end date. The app features its own database to securely store tasks.`;

const healthDesc = `An innovative application designed to bridge the communication gap
between doctors and patients. This project is built using a modern tech stack
with React, TypeScript, SCSS, Zustand, Firebase, and Firestore. Current features
include a comprehensive login/register system and user profile updates. The
project emphasizes improved healthcare accessibility and patient engagement`;


  export const projectContent = [

    {
        title: 'ChessIro',
        info: 'Multiplayer chess application',
        extendetDisc: chessDesc,
        img : ['chess-img1.png','chess-img2.png','chess-img3.png'],
        gitLink: 'www.github.com/chesiro',
        liveLink: 'chessiro.com',
      },

    {
        title: 'MirokO',
        info: 'User-friendly chat application',
        extendetDisc: mirkoDesc,
        img : ['mirko-img1.png','mirko-img2.png'],
        gitLink: 'www.github.com/mirko',
        liveLink: 'Miroko.com',
      },

      {
        title: 'ToDo',
        info: 'Simple ToDo app',
        extendetDisc: toDoDesc,
        img : ['toDo-img1.png','toDo-img2.png', 'toDo-img3.png'],
        gitLink: 'www.github.com/mirko',
        liveLink: 'Miroko.com',
      },

    {
        title: 'Iro-Health',
        info: 'Innovative communication app',
        extendetDisc: healthDesc,
        img : ['health-img1.png'],
        gitLink: 'www.github/iro-health.com',
        liveLink: 'iro-health.com',
      },
  ]