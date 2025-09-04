export default function Languages(){
    return(
        <div className="flex flex-col gap-12 blur-overlay rounded-2xl py-4 px-12 text-primary-content">
            <h1 className="text-2xl md:text-4xl font-bold title-gradient">My Language Abilities</h1>
            <ul>
                <li>
                    <p>French 🇫🇷 : Native (C2)</p>
                    <progress className="progress progress-success w-56" value="100" max="100"></progress>
                </li>
                <li>
                    <p>Kabyle ⵣ (berbere) : Native</p>
                    <progress className="progress progress-success w-56" value="100" max="100"></progress>
                </li>
                <li>
                    <p>English 🇬🇧 : C1</p> 
                    <progress className="progress progress-success w-56" value="80" max="100"></progress>
                </li>
                <li>
                    <p>Arabic 🇸🇦 : Fluent</p>
                    <progress className="progress progress-success w-56" value="80" max="100"></progress>
                </li>
                <li>
                    <p>Italian 🇮🇹 : very Basic (in progress)</p> 
                    <progress className="progress progress-success w-56" value="10" max="100"></progress>
                </li>
            </ul>
        </div>
    )
}