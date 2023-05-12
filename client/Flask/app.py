import pickle
from flask_cors import CORS
from flask import Flask, request
import os
from os.path import dirname, join, realpath
import nltk
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer, LancasterStemmer
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.tokenize import RegexpTokenizer
app = Flask(__name__)
CORS(app)

def load_model():
    # Specify the path to the pickle file
    model_path = os.path.join(os.path.dirname(__file__), 'Pickle', 'gh.pkl')

    # Load the pickle file
    with open(model_path, 'rb') as file:
        model = pickle.load(file)

    return model
def load_another_model():
    # Specify the path to the second pickle file
    another_model_path = os.path.join(os.path.dirname(__file__), 'Pickle', 'sample_data.pkl')

    # Load the second pickle file
    with open(another_model_path, 'rb') as file:
        another_model = pickle.load(file)

    return another_model


@app.route('/prediction', methods=['POST'])
def predict():
    campaign_title = request.json['campaign_title']

    # Load the AI model from the pickle file
    model = load_model()
# 2nd model
    vect = load_another_model()
# Process the campaign title using the AI model
    test_review_1 = [campaign_title]
    test_review_1 = [r.lower() for r in test_review_1]
    sw = stopwords.words('english')
    tokenizer = RegexpTokenizer(r'\w+')
    porter = PorterStemmer()
    tokens_1 = [word_tokenize(r) for r in test_review_1]
    tokens_1 = [[word for word in t if word not in sw] for t in tokens_1]
    tokens_1 = [["".join(tokenizer.tokenize(word)) for word in t 
             if len(tokenizer.tokenize(word))>0] for t in tokens_1]

    tokens_1 = [[porter.stem(word) for word in t] for t in tokens_1]
    clean_review_1 = [" ".join(review) for review in tokens_1]
    X_test = vect.transform(clean_review_1)
    prediction_result = model.predict_proba(X_test)
    response = {'prediction': [prediction_result[0][0]*100]}
    return response

if __name__ == '__main__':
    app.run(debug=True)
