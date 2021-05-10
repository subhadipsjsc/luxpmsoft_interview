
def First_n_Odd(num):
    arr=[]
    i=1
    j=1
    while i<=num:
        i=i+1
        arr.append(j)
        j=j+2
    return arr

def Modify_LuxPMsoft(word , num_arr):
    char_arr = list(word)
    char_arr_length = len(char_arr)
    num_arr_len = len(num_arr)
    
    new_string=''
    new_arr=[]
    i=0
    while i< char_arr_length:
        if i == char_arr_length-1:
            new_string += char_arr[i]
            new_arr.append(char_arr[i])
        else:
            new_string += char_arr[i]+str(num_arr[num_arr_len-i-1])
            new_arr.append(char_arr[i])
            new_arr.append(num_arr[num_arr_len-i-1])
        i+=1
    
    return {
        "myWord":new_string,
        "myArray":new_arr
    }




