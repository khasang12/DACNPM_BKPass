# DACNPM_BKPass
Welcome to our BKPass project.

## ✋Introduction 
After every semester, the significant demands for exchanging products and belongings are inevitably seen on social media groups. However, there are certainly many disadvantages considering security, manageability and item availablity. Having encountered those traumatic situations as students, we devised a semi-automated website from which "certified" users can sell and purchase things for the sake of effortless item management.

### Technology Stack
* Front-end: ReactJS, TailwindCSS, and many complementary libaries provided by npm.
* Back-end: NodeJS, ExpressJS.
* Database: MongoDB with Mongoose ODM.
* Deployment: Docker, Docker Compose.
* Security: Session, JWT, MD5,..

## 🎯Features Built
1. Authenciation & Authorization: Only users with certain privilege level are able to access confidential data.
2. Item Management: Authorized User can post a new item, change availablity and delete it. A list will be implemented to keep track of selling items.
3. Rating & Comment: Guests can view author's public information and add comments for that user. This would help other people decide the author's reliability and reputation.
4. Item Retrieval: Guests can search and filter items to their needs.
5. Marked List: Instead of direct payment, the website will only let the user mark the item to track its updates. User will need to contact to saler in person to get and purchase the item (that's why this website is called "semi-automated" 😙).

# 💻 Traditional Installation (without Docker)

## Prerequisite

To run the project on your own, please make sure that you have already installed MERN in your computer.

## Cloning repository
First, you will need to performing cloning on this Github Repository:
```bash
  git clone https://github.com/khasang12-khmt/DACNPM_BKPass.git
```

You will see a folder called "DACNPM_BKPASS", with two subfolders: "client" and "server".

![image](https://user-images.githubusercontent.com/81409431/210043306-e70f653d-e152-424f-af30-981bd64f6ffe.png)

## Install Dependencies
Next, you would need to install all of dependencies for our project. So now, let's go to "client" folder and install all of them.
```bash
  cd client
  npm i
```

Do the same thing with "server" folder. Make sure that you are not in "client" folder anymore.
```bash
  cd server
  npm i
```

You have installed all of dependencies now, so let's get started!

## 🛠 Running BKPass

We assume that you are in "DACNPM_BKPass" folder.
```bash
  cd server
  npm run dev
```
Now, let's start the client.

```bash
  cd client
  npm start
```


# 🗃️ Containerized Installation (with Docker)

## Prerequisite

To run the project on your own, please make sure that you have already Docker Engine in your computer. No MERN stack installation is required, since the program will run independent of operating system or hardware of your local machine.

## Cloning repository
You would also need to clone the Repo. 

## Install Dependencies
As mentioned before, you can run the program and skip this step. However, for the first time (or after each time a new packaged is included), you need to run the below command once.
```docker
  docker compose build
```

## 🛠 Running BKPass

Run this following command to start the service

```
  docker compose up -d
```


The ReactJs application will run on http://localhost:3000 and the Express application will run on http://localhost:5000


Done! Let's discover our BKPass xD. Good luck and have fun <3
