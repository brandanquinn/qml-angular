# qml-angular
Redesign of senior project converting from react->angular.

## Original senior project repository can be found here: https://github.com/brandanquinn/senior-project

### QML NBA Prediction Web App
This application combines my love for machine learning, basketball, and software development into one friendly project.

### Tech used
The project began with a Logistic Regression algorithm implemented using Tensorflow. This algorithm is trained using NBA basketball statistics and is used to compute a predicted point differential between two teams playing. As of right now the MAE (mean absolute error, or how off the point differential is on average) is roughly 4.5, while the predicted general outcome (W/L) is 88% accurate. This ML model is kept persistent and accessible using a Flask API. This API communicates with a Node.js API that is used to convert the raw prediction data to a format that is more user-friendly for the front end. Lastly, the front end framework I am currently using is Angular 8.
