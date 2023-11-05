public class Fitness {
    /*
    String name='sam',address;
    public Fitness(){
        //this('ABC','Pune'); // parameterize Constructor Call
        System.debug('In Default Constructor');
    }
    /*
    public Fitness(String name){ //String name = DEF 
        this(); //Default Constructor Call
        System.debug('Second constructor : '+this.name); // Output = sam
        this.name = name; // to refer class variable use THIS (this) keyword
        System.debug('Second constructor : '+name); // Output = DEF
        System.debug('Second constructor : '+this.name); // Output = DEF 
        
    }
    
    public Fitness(String n,String a){
        name = n;
        address = a;
        System.debug('Third Constructor : '+ name+' Address : '+address);
    }
    */
    public decimal calculateBMI(Decimal weight, Decimal hight){
        return weight/(hight*hight);
    }
    
    public decimal calculatePace(Decimal distance , Decimal minutes){
        decimal hr = minutes/60;
        return distance/hr;
    }
    
}