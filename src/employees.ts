export interface Employee{
    id:number;
    empname:string;
    doj: string;
    des: string;
    image: string;
    dob: string;
    add1: string;
    add2: string;
    state: string;
    city: string;
    country: string;
    pin: number;
    phone: number;
}
export const employees = [
    {
        id: 17745,
        empname:'John Doe',
        doj: '24/07/2018',
        des: 'Application Development Analyst',
        image: 'https://spherengopune.org/Synapse2021N/wp-content/uploads/2014/10/speaker-3.jpg',
        dob: '12/12/1991',
        add1: '11, 2nd Avenue',
        add2: 'Brooklyn',
        state: 'New York',
        city: 'New York City',
        country: 'United States',
        pin: 10151,
        phone: 5450221652,
    },
    {
        id: 15785,
        empname:'Jane Eyre',
        doj: '20/01/2016',
        des: 'App Developer',
        image: 'https://thumbs.dreamstime.com/b/portrait-happy-redhaired-woman-employee-optical-glasses-has-satisfied-expression-works-modern-gadgets-waits-meeting-143607929.jpg',
        dob: '22/11/1989',
        add1: '17, 34th Street',
        add2: 'Redmond Avenue',
        state: 'California',
        city: 'San Francisco',
        country: 'United States',
        pin: 40523,
        phone: 5458754652,
    },
    {
        id: 12781,
        empname:'Tony Stark',
        doj: '12/06/2011',
        des: 'Data Analyst',
        image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        dob: '05/05/1997',
        add1: '7, 19th Cross',
        add2: 'Manhattan',
        state: 'New York',
        city: 'New York City',
        country: 'United States',
        pin: 10002,
        phone: 5442121252,
    },
    {
        id: 25531,
        empname:'Peter Hugh',
        doj: '29/02/2020',
        des: 'Product Manager',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0UJ4Kp3zMYxvsEnxYrgQ6OKqDpNL55O1Gmg&usqp=CAU',
        dob: '25/02/1992',
        add1: '200, South Central Street',
        add2: 'Oakmond Avenue',
        state: 'California',
        city: 'Venice Beach',
        country: 'United States',
        pin: 50021,
        phone: 5633121232,
    },
    {
        id: 0,
        empname:'',
        doj: '',
        des: '',
        image: '',
        dob: '',
        add1: '',
        add2: '',
        state: '',
        city: '',
        country: '',
        pin: 0,
        phone: 0,
    },
]