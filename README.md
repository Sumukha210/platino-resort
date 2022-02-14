# **Next js and Prisma setup**

- ### _Installing Prisma:-_

  `yarn add -D prisma`

  `yarn add @prisma/client`

 <br/>

- ### _Init Prisma :-_

  `npx prisma init`

 <br/>

- ### _To migrate :- (after creating data model)_

  `npx prisma migrate dev --preview-feature`

  or
  <br>

  `npx prisma generate`

 <br/>

- ### _To open studio :-_

  `npx prisma studio`

<br>

---

<br>

# **Next js and Testing setup**

<br>

- ### _[Install ts-jest](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation) and other packages_

  `yarn add --D jest ts-jest @types/jest @testing-library/react @testing-library/user-event @testing-library/jest-dom`

  <br/>

- ### _After installing ts-jest,_

  `yarn ts-jest config:init`

<br>

- ### _To run test, add this to package.json_
  `test:jest`

<br>

- ### _After that create `tsconfig.jest.json` and `jest.config.js` in the root directory. Also create `jest.setup.js` in the `src` folder_
