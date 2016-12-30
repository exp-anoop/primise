 
function User()
{
    this.validateUser=function(user,pass)
    {
        this.user=user;
        this.pass=pass;
        var httpObj=new XMLHttpRequest();
        return new Promise (function(resolve, reject){
            httpObj.onreadystatechange=function()
            {
                console.log(this.readyState);
                if(this.readyState=='4'&& this.status=='200')
                {
                    var result=this.responseText;
                    result=JSON.parse(result);
                    if(result.status=='200')
                    {
                        resolve(result.message);
                    }
                    else
                    {
                        reject(result.message);
                    }
                }
            }
            httpObj.open('POST','https://exptest.herokuapp.com/api/login',true);
            httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
            httpObj.send('userName='+user+'&password='+pass);
        });         
    }
}

function Home()
{
    this.loadContent=function()
    {
        var httpObj=new XMLHttpRequest();
        httpObj.onreadystatechange=function()
        {
            if(this.readyState=='4'&& this.status=='200')
            {
                var result=this.responseText;
                result=JSON.parse(result);
                result.data.forEach(function(element){  
                console.log(element.imageUrl); });
            }
        }
        httpObj.open('GET','https://exptest.herokuapp.com/api/imageGallery',true);
        httpObj.send();
    }
}

var obj=new User();
validate();
function validate()
        {
            obj.validateUser("demo@experionglobal.com","exp@123")
            .then(function(data){
                console.log(data);
                var ob=new Home();
                ob.loadContent();

                })
            .catch(function(data) {
                console.log(data);
            });

        }
