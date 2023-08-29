from flask import Flask,  request, jsonify
import pickle
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import train_and_save_model as Tmodel


app = Flask(__name__)

# Load your trained model and vectorizer using pickle


# Load your data (replace with your actual data loading code)
data = pd.read_csv('Mental_Health_FAQ.csv', delimiter=',')

# Preprocess the questions for similarity matching
data['Processed_Questions'] = data['Questions'].apply(lambda x: x.lower())

# Define a variable to store user input
stored_user_input = None

# Define the home page route


@app.after_request
def set_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "http://localhost:5173"
    response.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept"
    return response


# Define the route to handle user inputs
@app.route('/chat', methods=['POST', 'GET'])
def req():
    global stored_user_input

    # Get the JSON data from the request body
    request_data = request.get_json()

    if 'user_input' in request_data:
        user_input = request_data['user_input']

        # Store the user input in the variable
        stored_user_input = user_input

        # Use the model to generate a response
        response = Tmodel.user_input(user_input)

        # Create a dictionary containing the user input and response
        data = {
            'user_input': user_input,
            'response': response
        }

        # Return the dictionary as JSON response
        return jsonify(data)
    else:
        return jsonify({'error': 'Invalid request data'})


# Define the route to retrieve the stored user input and provide a response
@app.route('/response', methods=['GET'])
def get_response():
    global stored_user_input

    if stored_user_input:
        response = Tmodel.user_input(stored_user_input)
        data = {
            'response': response
        }
        return jsonify(data)
    else:
        return jsonify({'error': 'No stored user input'})


if __name__ == '__main__':
    app.run(debug=True)
