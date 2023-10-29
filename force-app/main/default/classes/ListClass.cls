public class ListClass {
    public void method()
    {
        List<Integer> l = new List<Integer>{1,2,3,4,5,6};
        System.debug('Element in List :'+l);
    	l.add(7);
    	l.add(8);
	    System.debug('Element in List :'+l);
        l.add(9);
    }

}