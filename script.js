// all job's details
let jobs = [
  { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "" },
  { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "" },
  { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "" },
  { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "" },
  { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "" },
  { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "" },
  { id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "" },
  { id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: "" },
];

//card section
let activeTab = "all";
const jobsContainer = document.getElementById("jobsContainer");
const emptyState = document.getElementById("emptyState");

function statusBadge(status) {
  if (status === "interview") return '<span class="text-xs font-medium px-2 py-1 rounded-md bg-green-100 text-green-700">Interview</span>';
  if (status === "rejected") return '<span class="text-xs font-medium px-2 py-1 rounded-md bg-red-100 text-red-700">Rejected</span>';
  return '<span class="text-xs font-medium px-2 py-1 rounded-md bg-gray-100 text-gray-500">Not Applied</span>';
}

const trashIcon = `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`;

function createCard(job) {
  return `
  <div class="border border-gray-200 rounded-xl p-4">
    <div class="flex justify-between items-start gap-2">
      <div>
        <h3 class="font-semibold">${job.company}</h3>
        <p class="text-sm text-gray-500">${job.position}</p>
      </div>
      <button onclick="deleteJob(${job.id})" class="text-gray-400 hover:text-red-600" title="Delete">${trashIcon}</button>
    </div>

    <p class="text-sm text-gray-500 mt-3">${job.location} • ${job.type} • ${job.salary}</p>

    <div class="mt-2">${statusBadge(job.status)}</div>

    <p class="text-sm text-gray-600 mt-2">${job.description}</p>

    <div class="flex gap-3 mt-4">
      <button onclick="setStatus(${job.id}, 'interview')" class="flex-1 sm:flex-none px-5 py-2 rounded-lg border border-green-500 text-green-600 text-sm font-semibold uppercase hover:bg-green-50">Interview</button>
      <button onclick="setStatus(${job.id}, 'rejected')" class="flex-1 sm:flex-none px-5 py-2 rounded-lg border border-red-500 text-red-600 text-sm font-semibold uppercase hover:bg-red-50">Rejected</button>
    </div>
  </div>`;
}

function render() {
  const list = jobs.filter((job) => activeTab === "all" || job.status === activeTab);

  jobsContainer.innerHTML = list.map(createCard).join("");
  emptyState.classList.toggle("hidden", list.length !== 0);
  emptyState.classList.toggle("flex", list.length === 0);

  const interview = jobs.filter((j) => j.status === "interview").length;
  const rejected = jobs.filter((j) => j.status === "rejected").length;
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;
  document.getElementById("tabCount").innerText = list.length;
}


// Toggle between tabs
function setStatus(id, status) {
  jobs.find((j) => j.id === id).status = status;
  render();
}

// Delete job
function deleteJob(id) {
  jobs = jobs.filter((j) => j.id !== id);
  render();
}


// Tab switching
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    activeTab = btn.dataset.tab;
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("bg-white", "shadow-sm", "text-primary");
      b.classList.add("text-gray-500");
    });
    btn.classList.add("bg-white", "shadow-sm", "text-primary");
    btn.classList.remove("text-gray-500");
    render();
  });
});

render();