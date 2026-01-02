# Cursor 201: Rules
#### [Made by Sasha K with Scribe](https://scribehow.com/shared/Cursor_201_Rules__HD0L5YsYQKSm03UgVRGzcw)


1\. All right, so we're going to go over cursor rules. What are rules good for? They're good for. What are rules good for? They define consistent behavior across the code base. For model interactions. They enforce style guides and engineering standards. They scope behaviors to specific parts of the project using glob patterns, which means that it can target specific files, specific parts of the code base, like the front end or the back end, and you can be quite precise and surgical about how you do this. So we'll go through the flow of how to create cursor rules. To access rules. You can go to settings.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/5e10a39d-577a-4859-adde-f65b80cc87b1/ascreenshot_963cb6821197457f9f92b1a67f7e1065_text_export.jpeg)


2\. Cursor settings.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/038b2cf4-a493-40b5-ad04-aedab7734f51/ascreenshot_188b74a6bc9d491da19eefb880b48a7b_text_export.jpeg)


3\. Alternatively, you can do the shortcut command, shift j, or cursor settings. Then click on. Rules and commands.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/9c2fe195-6ed7-4cf8-9fd5-0c9c57bf2240/ascreenshot_39ef2f296e764a349ece90a428e19e32_text_export.jpeg)


4\. Rules can be configured at the user level, the project level, or the team level. So let's continue going through how we would set up rules. We're in the. Cursor settings under Rules and Commands. And we can see that. Rules can be applied.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/06a55369-8071-4b0a-acbd-de99f8c09335/ascreenshot_25ff7259fdf043cfb59a9f5178705523_text_export.jpeg)


5\. At the user level. Rules can be applied at the project level.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/c6d01973-65e5-474f-9069-75494fa18265/ascreenshot_bd1d78360abf4f40a42e4d6edad0e61d_text_export.jpeg)


6\. And they can be applied at the team level.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/5fbb68cc-c167-44ed-91ac-c1005924c440/ascreenshot_9fae6ed27c244f93bb1ecfb408de1764_text_export.jpeg)


7\. So for rules that you want globally for yourself as a user, you can put them there. For things that are repository specific, you put them in the project rules. And for teams that want to have consistent behavior across their code bases or their specific needs, they can set custom rules. For example. Our cursor team doesn't really like it when the agent. Tells us it's absolutely right.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/461c2730-3dbe-467b-92a0-66fce1a9ed95/ascreenshot_a75ba376193944b5a4aa24cf61f5b81b_text_export.jpeg)


8\. So we explicitly have the rule that to never tell us that we're absolutely right.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/68111c63-4c20-4f58-aacc-b497bb45b23e/ascreenshot_3552310334cc43d5b27bfa5e435e61b7_text_export.jpeg)


9\. But let's go ahead and create a rule. For our project. Because we want our AI to behave. Consistently when it speaks to us. So what we do here is.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/7ef5cace-806f-46ba-bc02-ed916f1e05a9/ascreenshot_2141f20ef3d04b21abe655d53f6ef99f_text_export.jpeg)


10\. We'll add a rule. We'll choose a custom rule. Although you can also add rules from GitHub with remote rules.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/c2f55517-6aa1-4e6c-a5e1-76c89649d1ba/ascreenshot_bf34f7b86aef4e0f906268fc49ef7e43_text_export.jpeg)


11\. Click custom rule. Let's have one that's for this project. AI behavior. Type in AI behavior.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/6aebca20-aea2-43bb-9f98-d0d5492ef034/ascreenshot_03d5672b29ef4909b90052246c36c176_text_export.jpeg)


12\. and we'll go ahead and type in our case we'll paste the following And we're going to paste our instructions. Telling the AI to always be concise and direct. And to never tell us we're absolutely right. Just like our team. In this case, we're just doing it for demo purposes. Of course, we can intelligently choose when to apply it.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/e9ad485c-76c0-4cba-b16b-fa86c8ac1248/ascreenshot_85a49066c04b4590b8e1b416d928b421_text_export.jpeg)


13\. You can either always apply it, you can choose to apply it intelligently. To allow the agent to decide when it's relevant. And also you can choose to apply it to specific files. Such as when you want certain rules to be specific. To certain files. Like only front end or only backend. Or you can have a rule that's only applied manually. In this case, we'll choose Always apply.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/631f8a41-dd84-46f9-9289-077d4b7de87e/ascreenshot_0d4e61cfa01148c6bf1d564f71a77f97_text_export.jpeg)


14\. Click here

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/3d09e8f0-366b-4e70-8561-94ddedf28543/ascreenshot_6a75177198c64509bdf13ac33a880573_text_export.jpeg)


15\. Click "Always Apply "

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/eadee6e6-bab3-49a6-8a41-30d45bcb6a8a/ascreenshot_a2c6f19cad0a4c1f9ee17a0b01cdf9b7_text_export.jpeg)


16\. In this case, we'll choose Always apply.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/178396fc-717b-4e6d-b1fb-993aebed9ab1/ascreenshot_af07b390a1a34366a669cf1654c4a955_text_export.jpeg)


17\. Let's look at a few rule examples to get an idea for how we can use different rules.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/7e42c23e-67bf-4329-808c-cfad5629f819/ascreenshot_e6feaae0592a4bab86b97b4cd099310e_text_export.jpeg)


18\. If we want to have rules that are specific to. A part of the code base, such as for react components. Which are only in our front end. You can choose. You can have that happen where you choose apply to specific files.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/880fbf8e-c6a8-4efc-8f2b-3c20b7772620/ascreenshot_fbb539947b6d44229797de1d66265721_text_export.jpeg)


19\. Click "text field"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/38d282f8-6880-431e-9701-3552da7cc6f8/ascreenshot_21901f83dd4d472980f05dd5cab5c10d_text_export.jpeg)


20\. And you choose the glob pattern to target specific files such as this. So in our case. This rule. For explicit styling or for our best practices for how to write react components. We'll only apply to. React components that are located in the components directory. These things are great. These kinds of rules are great for enforcing a style guide pattern that's custom to your team or to your organization and making sure that your code style. Is coherent and consistent when written by the agent so that you don't have to go back and overwrite it or adjust it later. Another example. Is. When you want to.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/7800623f-5cab-471d-9c52-2b93e6d33f6d/ascreenshot_f6deb3c11fd3446989cbfd81187abc82_text_export.jpeg)


21\. Let's look at an example where an agent will be applying changes intelligently. You want to make sure that validation.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/02e275b8-802c-476e-988a-c5c5f2eff4d2/ascreenshot_8dd37298609143d491bc5655a75fdc81_text_export.jpeg)


22\. Happens. So you might choose apply intelligently where you need to, then.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/45b36f10-e56f-4c2d-8945-17ea2ec58bf2/ascreenshot_a54f4c5e6a4342f78894db2451f93ca0_text_export.jpeg)


23\. Click "text field"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/9cef7ea2-df85-40ae-b1e0-244addcfb3b4/ascreenshot_1d4ca932bdee41c1b8d58395437e4216_text_export.jpeg)


24\. Type in a description. We'll explain why in a second. For rules like this for validation standards. Such as when you want to have validation both on a client side component. When a user is, for example, typing into an input field. You might want front end validation, but you also want to validate against when files are or. When information gets sent over to the backend. You never know when a user or a hacker may try to send malicious data over, so you do want to be able to validate both on the front end and the back end before. Inputs get sent over to your service. This is an important security feature. However, this is hard to target with a glob pattern because you'll have both in the back end. You'll have validation happening both in the front end and in the back end. And while you may have a good convention for this a lot of times, Validation could be happening. In various places, so you may want the agent to decide. To know. When. It. 's doing a fix for validation to then follow these best practices. So that when the agent is doing validation, or it knows it's doing a validation fix, it will refer to these. It will be able to choose and apply this context intelligently. To know. To follow. Best practices to follow, the specific validation library that you're using, or any other instructions you may want to give it. Alternatively, you can choose a rule that you apply manually.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/23f95d7c-7a56-4526-a499-6b497c3d22be/ascreenshot_a181854c785d4852902b88cf6dfb16ff_text_export.jpeg)


25\. Click "Apply Manually "

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/fd04cefb-16f2-48ce-84f6-1c70aa9a74be/ascreenshot_85da4e8c180042e79035686fbb5f89fb_text_export.jpeg)


26\. So you choose to apply it only when you. Only by tagging it.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/58b54402-7dfe-49b2-9762-653db0103a91/ascreenshot_0e052d44168b441e84c923644be9b2dd_text_export.jpeg)


27\. In this case, we may want to have some instructions for how to refactor code. So you may want the user, you may want the agent to make sure that it's not changing behavior. But it's only refactoring things. So maybe changing a library or a service. But we want to make sure it's not also updating any core behavior. So you would apply that by opening up the Agent view. You can do that by clicking on.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/a38cd4cd-7099-423e-b8ea-54528286ecd0/ascreenshot_2d733d071c814153a0c287d9e9aead9b_text_export.jpeg)


28\. Opening up the chat. So you can click.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/1dbae285-3e09-4412-bf09-3cab4875d2e3/ascreenshot_70e4f7d132f94a6ab11ff094aa56a84a_text_export.jpeg)


29\. Here.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/95c40a26-9609-4303-b540-fa64387cba7b/ascreenshot_c0d2e3fb59824815a6d21649014ba417_text_export.jpeg)


30\. Open up the agent.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/519dc954-cd04-4886-90ef-f2894d82a3e5/ascreenshot_84c9b3d84e004cc98b28e20fefaaa4b7_text_export.jpeg)


31\. And you can then tag.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/cfbdeca1-fa98-4c40-838f-37fd8ee3885a/ascreenshot_1b275c847fbe4833931eb0c610129417_text_export.jpeg)
#### [Made with Scribe](https://scribehow.com/shared/Cursor_201_Rules__HD0L5YsYQKSm03UgVRGzcw)


