

export class apartment{  
     
     constructor(
    public Id: string,
    public type: string,
    public title: string,
    public city: string,
    public neighborhood: string,
    public price: number,
    public rooms: number,
    public bathrooms: number,
    public size: number,
        public image: string,
            public floor: number,
               public features: []
  ) {}

 

  
    
}