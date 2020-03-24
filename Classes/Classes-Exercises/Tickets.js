    // 100 / 100
function sortTickets(ticketData, criteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
   let sortedTickets = parseInput(ticketData)
    .sort((a, b) => {
        if (typeof(a[`${criteria}`]) === 'number') {
            return a[`${criteria}`] - b[`${criteria}`]
        } else {
            return a[`${criteria}`].localeCompare(b[`${criteria}`])
        }
    });

    function parseInput(input){
        let ticketData = [];
        input.map(t => {
            let ticketInfo = t.split("|");
            let ticket = new Ticket(ticketInfo[0], +ticketInfo[1], ticketInfo[2]);
            ticketData.push(ticket);
        })
        return ticketData;
    }

    return sortedTickets;
}



console.log(sortTickets(['Philadelphia|194.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));
