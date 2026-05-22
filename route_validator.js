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
    const afterSet=new Set();
    const pathToElement=new Map();

    route.forEach(el=>{
        pathToElement.set(el.dataset.path,el);
    });

    for(let i=route.length-1;i>=0;i--){
        const el=route[i];
        const path=el.dataset.path;
        const data=blockLookup[path];

        if(data&&data.after){
            data.after.forEach(required=>{
                if(!afterSet.has(required)){

                    el.classList.add("routeBlockError");

                    const error=document.createElement("div");
                    error.className="errorItem";
                    error.textContent=`"${path}" requires "${required}" later in route`;

                    error.onclick=()=>{
                        const target=pathToElement.get(required);
                        if(target){
                            target.scrollIntoView({behavior:"smooth",block:"center"});
                            target.classList.add("routeSelected");
                            setTimeout(()=>target.classList.remove("routeSelected"),800);
                        }
                    };

                    errorPanel.appendChild(error);
                }
            });
        }

        afterSet.add(path);
    }
}