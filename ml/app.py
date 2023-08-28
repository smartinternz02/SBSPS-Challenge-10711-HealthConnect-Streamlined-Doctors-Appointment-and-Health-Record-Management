from flask import Flask, render_template, request, jsonify
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

# Define the home page route


@app.route('/')
def home():
    return render_template('home.html')  # Render the home page template

# Define the route to handle user inputs


@app.route('/chat', methods=['POST'])
def req():
    user_input = request.form['user_input']

    response = Tmodel.user_input(user_input)
    # Create a dictionary containing the user input and response
    data = {
        'user_input': user_input
    }

    # Return the dictionary as JSON response
    return jsonify(data)

  #  return render_template('chat.html', user_input=user_input, response=response)


@app.route('/response', methods=['GET'])
def response():
    user_input = request.form['user_input']

    response = Tmodel.user_input(user_input)
    # Create a dictionary containing the user input and response
    data = {

        'response': response
    }

    # Return the dictionary as JSON response
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
