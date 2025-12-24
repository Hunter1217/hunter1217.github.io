(async function(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const res = await fetch("./assets/projects.json");
    const projects = await res.json();

    const project = projects.find(p => p.id === id);

    if(!project){
        document.body.innerHTML = "<h1> Project not found</h1>";
        return;
    }

    document.getElementById("proj_title").textContent = project.title;
    document.getElementById("project_desc").textContent = project.description;

    const tech = document.getElementById("tech");
    tech.innerHTML = "";
    project.tech.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        tech.appendChild(li);
    });

    document.getElementById("repl").src = project.repl;

    document.getElementById("repo").href = project.repo;
})();