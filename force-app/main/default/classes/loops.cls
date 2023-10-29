public class loops {
    public void meth() {
        Set<Integer> s = new set<Integer>{1,2,3,4,5};
        System.System.debug('Set Element '+s);
        List<String> l = new List<String>{'Hi','How','Are','You'};
        System.debug('List element '+l);
        l.add('Datta');
        System.debug('List Element :'+l);
        Map<Integer,String> m = new Map<Integer,String>();
        m.put(1,'Datta');
        m.put(2,'Suraj');
        System.debug('Map Element '+m);
		for(Integer i=0;i<10;i++)
        {
            System.debug('Value of i is '+i);
        }
        Integer n=1;
            
         do{
            System.debug('Value of N is '+n);
            n++;
            
           }while(n!=6);
        
        Integer a=10;
        while(a!=20)
        {
            System.debug('Value of a is '+a);
            a++;
        }
        List<String> ls = new List<String>{'Hello','How','Are','You'};
            for(String lss : ls )
            {
                System.debug('value of lss :'+lss);
            }
    }

}