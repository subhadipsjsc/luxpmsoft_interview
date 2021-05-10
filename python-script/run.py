from flask import Flask, make_response,jsonify

from helper import First_n_Odd,Modify_LuxPMsoft


app=Flask(__name__)

@app.route('/', methods=['GET','POST'])
def main_func():
    odd_numbers = First_n_Odd(20)
    result = Modify_LuxPMsoft("LuxPMsoft" , odd_numbers) 
    response = make_response(jsonify(result) ,200)
    return response


if __name__ == "__main__":
    app.run(debug=True,port=8123)