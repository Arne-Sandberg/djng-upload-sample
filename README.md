# djng-upload-sample

File upload sample with django and angular.

In this sample project I'll show how to make a simple API REST with Django REST Framework
and an angular frontend to upload files.

All the django project is in the `backend` folder and the angular project (created with angular-cli)
is in the frontend folder.

The projects was created with this commands:

```
mkdir djng-upload-sample
cd djng-upload-sample
virtualenv env
source ./env/bin/activate
pip install django djangorestframework markdown
django startproject backend
ng new frontend --skip-test
```

After this commands the project structure looks like this:

    - backend
      |- manage.py
      |- backend
         |- settings.py
         |- ...
    - frontend
      |- src
         |- app
         |- ...
      |- ...

# Run locally

First, you need to clone the repository

```
git clone git@github.com:tonybolanyo/djng-upload-sample.git
```

To run the backend, create a virtual environment, install dependencies
using `pip` and run the development server.

```
cd djng-upload-sample
virtualenv env
source ./env/bin/activate
pip install -r requirements.txt
cd backend
python manage.py runserver
```

To run the frontend, install dependencies using `npm` and
use `ng` client to serve the application.

```
cd djng-upload-sample
cd frontend
npm install
ng serve -o
```
