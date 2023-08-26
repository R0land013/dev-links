import type { Link, LinkCategory, LinkCategoryName } from '../index';
import DeveloperRoadmaps from './developer-roadmaps';
import edX from './edx';
import Exercism from './exercism';
import FreeCodeCamp from './free-code-camp';
import FullstackOpen from './fullstack-open';
import Mimo from './mimo';
import MITOCW from './mit-ocw';
import OpenBootcamp from './open-bootcamp';
import RefactoringGuru from './refactoring-guru';
import Scrimba from './scrimba';
import TeachYourselfComputerScience from './teach-yourself-computer-science';
import TheAlgorithms from './the-algorithms';
import TheOdinProject from './the-odin-project';
import W3Schools from './w3schools';


type LearningCategoryName = Extract<LinkCategoryName, 'Learning'>;


export type LearningLink = Omit<Link, 'category'> & {
    category: LearningCategoryName
};


const LearningCategoryLinks: Array<LearningLink> = [
    DeveloperRoadmaps,
    edX,
    Exercism,
    FreeCodeCamp,
    FullstackOpen,
    Mimo,
    MITOCW,
    OpenBootcamp,
    RefactoringGuru,
    Scrimba,
    TeachYourselfComputerScience,
    TheAlgorithms,
    TheOdinProject,
    W3Schools,
];


const learningCategory: LinkCategory = {
    name: 'Learning',
    links: LearningCategoryLinks
};


export default learningCategory;