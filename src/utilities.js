export function due_date(value) {
    const days = [
        "Sun",
        "Mon", 
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let date, data;

    data = value.split('-').map((res, index) => (index % 2) ? res - 1 : res);
    date = new Date(data[0], data[1], data[2]);
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}

export function create_id(size) {
    let id;

    id = '';
    for (let i = 0; i < size; i++) {
        let number;

        do
            number = Math.floor(Math.random() * 94) + 33;
        while (number == 34 || number == 39 || number == 96 || number == 92);
        id += String.fromCharCode(number);
    }
    return id;
}