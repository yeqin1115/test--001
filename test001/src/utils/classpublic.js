
// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     toString() {
//       return '(' + this.x + ', ' + this.y + ')';
//     }
//   }
export const Func=class Fuilt {
    constructor(x,y){
this.x11=111;
this.y=y
    }

    public(){
      return this.x11
    }
}

export const Funcson=class Statuss extends Func{
    constructor(x,y){
        super(x,y);
        this.x=x;
        this.yee=y;
       
    }
    public(){
        alert(this.x+super.public())
    }
}
// export default func