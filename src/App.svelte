<script>
    import { currentPage } from "./stores.js";
    import PlansPage from "./lib/PlansPage.svelte";
    import OptionsPage from "./lib/OptionsPage.svelte";
</script>

{#if $currentPage === "plans"}
    <div>plans</div>
    <!-- Plans Page -->
    <PlansPage />
{:else if $currentPage === "options"}
    <div>ops</div>
    <!-- Options Page -->
    <OptionsPage />
{:else if $currentPage === "degree"}
    <div>degr</div>
    <!-- Degree Page -->
    <div>unimplemented</div>
{:else}
    <div>unimplemented</div>
{/if}

<!--
{#each full_plan as sem}
    <div class="semesterPlanOuter">
        <span class="semester_time">{sem.season + " " + sem.year}</span>
        <span class="credit_total"
            >{sem.courses.reduce(
                (acc, cur) => acc + Number(cur.CreditValue),
                0
            )}</span
        >
        <div class="semesterPlan">
            {#each sem.courses as cour}
                <div class="courseGroup">
                    <div class="courseSmall">
                        <span class="courseName"
                            >{cour.SubjectAbbreviation +
                                " " +
                                cour.Number}</span
                        >
                        <span class="courseCredits">{cour.CreditValue}</span>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/each}

<div id="plansPage">
    <div id="navBar">
        <div id="degree">Degree</div>
        <div id="plans">Plans</div>
        <div id="options">Options</div>
    </div>
</div>
-->

<!--
login.montana.edu - input NetID and Password => student data

student data =>
    courses
    major
    college
    degree


degree requirements
core requirements
major requirements

course catalog


let value = $state(0);
    let aa = [1, "a", "a", [{ a: "a" }]];
    //       (string | number | { a: string }[])[]
    type CourseType = {
        //EntityIDCode: string;
        Subject: string;
        Number: string;
        Title: string;
        CreditValue: number;
        //AcademicGrade: string;
        //Session: [string, string];
    };
    type ReqAllOfType = {
        courses: CourseType[];
    };
    type ReqSomeOfType = {
        course_goal: string;
        courses: CourseType[];
    };
    type ReqCreditsGoalType = {
        credits_goal: string;
        courses: CourseType[];
    };
    type ReqOtherType = {
        desc: string;
    };
    type RequirementType =
        | ReqAllOfType
        | ReqSomeOfType
        | ReqCreditsGoalType
        | ReqOtherType;

    type AcademicProgramType = {
        ProgramName: string;
        CollegeCode: string;
        ProgramCatalogYear: string;
        MajorName: string;
        MajorRequirements: RequirementType[];
    };
    type SemesterPlanType = {
        year: number;
        season: string;
        courses: CourseType[];
    };
    let course_catalog: CourseType[] = []; // https://catalog.montana.edu/coursedescriptions/
    let program_catalog: AcademicProgramType[] = [];
    const core_requirements: RequirementType[] = [];
    const degree_requirments: RequirementType[] = [];

    let full_plan: SemesterPlanType[] = [];
<style>
    html {
        font-size: 14px;
        font-family: "Google Sans", "Helvetica Neue", sans-serif;
    }
</style>
-->
