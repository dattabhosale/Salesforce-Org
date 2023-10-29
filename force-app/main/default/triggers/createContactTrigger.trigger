trigger createContactTrigger on Account(before update) {
    Contact c = new Contact(LastName = 'Steve');
    insert c;
}