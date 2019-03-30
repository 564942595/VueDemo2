

var localstroage={
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  },
  get(key){
    return JSON.parse(localStorage.getItem(key))
  },
  remove(key){
    localStorage.remove(key);
  }
}

export default localstroage;
