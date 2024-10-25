const form=document.getElementById("GenerateTable");
let output = document.getElementById("output");
form.addEventListener("submit",function(event){
    event.preventDefault();

    const row=parseInt(document.getElementById("row").value);
    const col=parseInt(document.getElementById("col").value);
    // console.log(typeof(row));

    // const d=document.createElement('div');
    const table=document.createElement('table');

    for( let i=0;i<row;i++)
    {
        const tr=document.createElement('tr');
        for(let j=0;j<col;j++)
        {
            const td=document.createElement('td');
            td.innerText='explorin';
            tr.append(td);

        }
        table.append(tr);
    }

    
    output.append(table);
    
    

})
