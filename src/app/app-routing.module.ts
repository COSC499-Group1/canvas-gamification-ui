import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {SampleQuestionsComponent} from './components/sample-questions/sample-questions.component';
import {TopicsComponent} from './components/topics/topics.component';
import {TokenValuesComponent} from './components/token-values/token-values.component';
import {UserStatsComponent} from './components/user-stats/user-stats.component';
import {LoginComponent} from '@app/components/accounts/login';
import {AuthGuard} from '@app/_helpers/auth.guard';
import {ProblemSetComponent} from '@app/components/problems/problem-set/problem-set.component';
import {RegisterComponent} from './components/accounts/register/register.component';
import {ProfileDetailsComponent} from './components/accounts/profile-details/profile-details.component';
import {ResetPasswordComponent} from './components/accounts/reset-password/reset-password.component';
import {ConsentFormComponent} from '@app/components/accounts/consent-form/consent-form.component';
import {FaqComponent} from './components/faq/faq.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {CourseListComponent} from '@app/components/course/course-list/course-list.component';
import {CourseComponent} from '@app/components/course/course.component';
import {UserActionsComponent} from '@app/components/homepage/user-actions/user-actions.component';
import {CourseEventCreateEditComponent} from '@app/components/course/course-event-create/course-event-create-edit.component';
import {CourseQuestionSnippetComponent} from '@app/components/course/course-question-snippet/course-question-snippet.component';
import {CourseRegisterComponent} from '@app/components/course/course-registration/course-register.component';
import {ProblemViewComponent} from '@app/components/problems/problem-view/problem-view.component';
import {ProblemEditComponent} from '@app/components/problems/problem-edit/problem-edit.component';
import {ProblemCreateComponent} from '@app/components/problems/problem-create/problem-create.component';
import {ActivationEmailComponent} from '@app/components/accounts/activation-email/activation-email.component';
import {SubmissionViewComponent} from '@app/components/problems/submission-view/submission-view.component';
import {NamedRoute} from "@app/_helpers/named-route.interface";


const routes: NamedRoute[] = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent,
        name: 'landing'
    },
    {
        path: 'contact',
        component: ContactComponent,
        name: 'contact'
    },
    {
        path: 'sample-questions',
        component: SampleQuestionsComponent,
        name: 'sampleQuestions'
    },
    {
        path: 'topics',
        component: TopicsComponent,
        name: 'topics'
    },
    {
        path: 'token-values',
        component: TokenValuesComponent,
        name: 'tokenValues'
    },
    {
        path: 'course/:courseId/category/:categoryId',
        component: UserStatsComponent,
        name: 'userStats'
    },
    {
        path: 'accounts/login',
        component: LoginComponent,
        name: 'login'
    },
    {
        path: 'homepage',
        component: HomepageComponent,
        canActivate: [AuthGuard],
        name: 'homepage'
    },
    {
        path: 'actions',
        component: UserActionsComponent,
        name: 'actions'
    },
    {
        path: 'faq',
        component: FaqComponent,
        name: 'faq'
    },
    {
        path: 'accounts/register',
        component: RegisterComponent,
        name: 'register'
    },
    {
        path: 'accounts/profile',
        component: ProfileDetailsComponent,
        canActivate: [AuthGuard],
        name: 'profile'
    },
    {
        path: 'accounts/reset-password',
        component: ResetPasswordComponent,
        canActivate: [AuthGuard],
        name: 'resetPassword'
    },
    {
        path: 'accounts/consent-form',
        component: ConsentFormComponent,
        canActivate: [AuthGuard],
        name: 'consentForm'
    },
    {
        path: 'accounts/activate/:uuid/:token',
        component: ActivationEmailComponent,
        name: 'activationEmail'
    },
    {
        path: 'course',
        pathMatch: 'full',
        component: CourseListComponent,
        canActivate: [AuthGuard],
        name: 'courseList'
    },
    {
        path: 'course/register/:courseId',
        component: CourseRegisterComponent,
        canActivate: [AuthGuard],
        name: 'courseRegister'
    },
    {
        path: 'course/view/:courseId',
        component: CourseComponent,
        canActivate: [AuthGuard],
        name: 'courseView'
    },
    {
        path: 'course/:courseId/new-event',
        component: CourseEventCreateEditComponent,
        canActivate: [AuthGuard],
        name: 'courseEventCreate'
    },
    {
        path: 'course/:courseId/new-event/:eventId',
        component: CourseEventCreateEditComponent,
        canActivate: [AuthGuard],
        name: 'courseEventEdit'
    },
    {
        path: 'course/:courseId/event/:eventId',
        component: CourseQuestionSnippetComponent,
        canActivate: [AuthGuard],
        name: 'courseEvent'
    },
    {
        path: 'problems',
        component: ProblemSetComponent,
        canActivate: [AuthGuard],
        name: 'problemSet'
    },
    {
        path: 'problem/:id',
        component: ProblemViewComponent,
        canActivate: [AuthGuard],
        name: 'problemView'
    },
    {
        path: 'course/:courseId',
        children: [
            {path: 'problem/:id', component: ProblemViewComponent},
            {path: 'event/:eventId/problem/:id', component: ProblemViewComponent}
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'problem/:id/edit',
        component: ProblemEditComponent,
        canActivate: [AuthGuard],
        name: 'problemEdit'
    },
    {
        path: 'problem/create/:type',
        component: ProblemCreateComponent,
        canActivate: [AuthGuard],
        name: 'problemCreate'
    },
    {
        path: 'problem/submission/:id',
        component: SubmissionViewComponent,
        canActivate: [AuthGuard],
        name: 'problemSubmit'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
