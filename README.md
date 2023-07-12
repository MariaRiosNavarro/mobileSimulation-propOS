![pages of propOs](/public/header-picture.jpg)

### Introduction to PropOS (Mobile Simulation OS)

Simulation of a mobile phone operating system, for use in film shoots. The core of the App is the contact list, where you can manage contacts and simulate calls and messages. In the settings you can choose a light, dark or customisable profile. There is also a photo gallery as well as a digital assistant through artificial intelligence (Open AI).

For now the login page is a fake and only by pressing the button you can go inside. The next projects will be to create a real authentication and to make possible the external manipulation of the simulation via Bluetooth to simulate incoming calls and messages.

All applications on the Home screen that are not yet useful will be developed in the future. For now they only have: home, phone, messages, settings, contacts and internet.

-[PropOS Vercel Deployment](https://mobile-simulation-prop-os.vercel.app/)

-[PropOS Videos](https://www.youtube.com/channel/UCo1oiENvwvKwavYpWnTXx-g)

-[PropOS Figma PRE-Prototyp](https://www.figma.com/proto/jp0WO7U6OP5iv2XTdg78V8/Mobile-Simulation?type=design&node-id=27-2998&scaling=min-zoom&page-id=27%3A2997&starting-point-node-id=27%3A2998)

-[PropOS Figma END-Prototyp](https://www.figma.com/proto/ns3GPnyuBqIhDBXCGJFyqg/Untitled?type=design&node-id=1-19&t=WEdlnBpxhnrJl67C-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A19)

<div align="center">
  <img src="./public/appvideo.gif" height="410px"/>
</div>

---

### Tech Stack

- React
- Next.js
- MongoDB
- OpenAI API
- Cloudinary
- Jest
- React Testing Library
- SWR
- mongoose
- vercel
- Git
- npm

### How to set it up

- Clone this repository
- Install all dependencies: `npm install`
- create Cloudinary, OpenAI and MongoDB Atlas accounts
- create `.env file` in the root directory and insert enviroment variables in it:

  - MONGODB_URI

  - OPENAI_API_KEY

  - CLOUDINARY_SECRET

  - CLOUDINARY_API_KEY

  - CLOUDINARY_CLOUD_NAME

- Run app in dev mode:  `npm run dev`

- Have fun at: http://localhost:3000

- run tests via: `npm run test`

---

### Organisation of the folder:

![Explanation of the folders in the App](/public/explanation-readme.jpg)

- 0 -> pages/index.js

- 1 -> pages/home.js

- 2 -> pages/images/index.js

- 3 -> pages/images/upload.js

- 4 -> pages/contacts.js

- 5 -> pages/create.js

- 6 -> pages/aipage/index.js

- 7 -> pages/contacts-call/[id]/index.js

- 8 -> pages/contacts-message/[id]/index.js

- 9 -> pages/contacts/[id]/index.js

- 10 -> pages/contacts/[id]/edit/index.js

- 11 -> pages/settings.js

- 12 -> pages/message.js

- 13 -> pages/phone.js
