function main()
{
    console.log("hello")
    for(let i=0;i<=100;i++)
    {
        setTimeout(function(){
            obj = document.getElementById('statusbar');
            obj.style.width = i +"%";
            console.log(i)
        },50 *i);
    }
}
main()