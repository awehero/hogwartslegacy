//route_validator.js
function clearRouteErrors(){
    routeContainer.querySelectorAll(".routeBlockError").forEach(el=>{
        el.classList.remove("routeBlockError");
    });
}
function validateRoute(){
    errorPanel.innerHTML="";
    clearRouteErrors();

    const route=[...routeContainer.querySelectorAll(".libraryBlock")];
    const completed=new Set();

    route.forEach((el,index)=>{
        const path=el.dataset.path;
        const data=blockLookup[path];

        if(data&&data.after){

            data.after.forEach(required=>{

                const appearsLater=route.slice(index+1).some(x=>
                    x.dataset.path===required
                );

                if(!completed.has(required)||appearsLater){

                    el.classList.add("routeBlockError");

                    const error=document.createElement("div");
                    error.className="errorItem";

                    if(appearsLater){
                        error.textContent=`"${required}" appears after "${path}"`;
                    }else{
                        error.textContent=`"${path}" requires "${required}" before it`;
                    }

                    error.onclick=()=>{
                        const target=route.find(x=>
                            x.dataset.path===required
                        );

                        if(target){
                            target.scrollIntoView({
                                behavior:"smooth",
                                block:"center"
                            });

                            document.querySelectorAll(".routeSelected").forEach(x=>{
                                x.classList.remove("routeSelected");
                            });

                            target.classList.add("routeSelected");

                            setTimeout(()=>{
                                target.classList.remove("routeSelected");
                            },800);
                        }
                    };

                    errorPanel.appendChild(error);
                }

            });

        }

        completed.add(path);
    });
}