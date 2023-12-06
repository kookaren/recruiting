

window.addEventListener("load", function() {
    

    document.getElementById("closenav").addEventListener("click", function() {
        document.querySelector(".sidenav").style.width = "0";
    });

    document.getElementById("menu").addEventListener("click", function() {
        document.querySelector(".sidenav").style.width = "250px";
    });

    document.getElementById("one").addEventListener("click", function() {
        if(document.getElementById("one").style.background == "white") {
            document.getElementById("one").innerHTML = "Click Me For Tip #1";
            document.getElementById("one").style.background = "#8a1757"; 
            document.getElementById("one").style.color = "white"; 
        }
        else {
            document.getElementById("one").innerHTML = "Use the STAR method. S: Situation, T: Task, A: Action, R: Result";
        document.getElementById("one").style.background = "white"; 
        document.getElementById("one").style.color = "#8a1757"; 
        }


    });
    document.getElementById("two").addEventListener("click", function() {
        if(document.getElementById("two").style.background == "white") {
            document.getElementById("two").innerHTML = "Click Me For Tip #2";
            document.getElementById("two").style.background = "#8a1757"; 
            document.getElementById("two").style.color = "white"; 
        }
        else {
        document.getElementById("two").innerHTML = "Be prepared with examples of your work";
        document.getElementById("two").style.background = "white"; 
        document.getElementById("two").style.color = "#8a1757"; 
        }

    });
    document.getElementById("three").addEventListener("click", function() {
        if(document.getElementById("three").style.background == "white") {
            document.getElementById("three").innerHTML = "Click Me For Tip #3";
            document.getElementById("three").style.background = "#8a1757"; 
            document.getElementById("three").style.color = "white"; 
        }
        else {
        document.getElementById("three").innerHTML = "Research the company and interviewers";
        document.getElementById("three").style.background = "white"; 
        document.getElementById("three").style.color = "#8a1757"; 
        }

    });
    document.getElementById("four").addEventListener("click", function() {
        if(document.getElementById("four").style.background == "white") {
            document.getElementById("four").innerHTML = "Click Me For Tip #4";
            document.getElementById("four").style.background = "#8a1757"; 
            document.getElementById("four").style.color = "white"; 
        }
        else {
        document.getElementById("four").innerHTML = "Prepare smart questions for your interviewers";
        document.getElementById("four").style.background = "white"; 
        document.getElementById("four").style.color = "#8a1757"; 
        }
    });

    this.document.getElementById("tell").addEventListener("click", function() {
        document.querySelector(".answers").innerHTML = "To answer this, create a story about yourself. Where are you in terms of your career right now, and how did you end up there, and what are you currently looking into?";

    });

    this.document.getElementById("why").addEventListener("click", function() {
        document.querySelector(".answers").innerHTML = 
        "To answer this question, express your passion for the employer's specific product or mission. " + 
        "Then, explain the specific resposibilies of the role you have applied to and how you would enjoy it. " +
        "Lastly, describe how your skills and experience align with the company's mission and goals. " 
    });

    this.document.getElementById("strength").addEventListener("click", function() {
        document.querySelector(".answers").innerHTML = 
        "To answer this question, choose a strength that is relevant and important for the role you're applying for. " + 
        "For example, if the role is HR related, it's best to talk about a strength related to working with people, such as collaborative, empathetic, honest, etc."
    });


    this.document.getElementById("weakness").addEventListener("click", function() {
        document.querySelector(".answers").innerHTML = 
        "To answer this question, do not say a weakness that can compromise your ability to perform the responsibilites listed in the job position. " + 
        "ALWAYS follow up this question with steps that you're taking in order to improve this weakness into a strength."
    });

    this.document.getElementById("fail").addEventListener("click", function() {
        document.querySelector(".answers").innerHTML = 
        "When answering this question, it is crucial to focus more on the learning part than the failure. Talk about what you ultimately learned because of the failure. " + 
        "Aim toward failure that had low consequences, rather than failure that is hard to resolve or redeem."
    });

   
   
});
