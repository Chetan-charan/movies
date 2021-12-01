const data = `
1,Santhiya,B25WE
2,Madhan,B26WD
3,Ashih,B28WD
4,Rakesh,B27WD`;

const lines = data.split('\n');

for(var i=0;i<lines.length;i++){
    if(lines[i].include('Ashih')){
        console.log(lines[i]);
    }
}