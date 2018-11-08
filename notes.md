NOTES: 11/8
-orginal material lines 468-483
-important:
<p id="email_from" class="text-3">Filip Szamborski</p>

<p id= email_to class="text-4">To: amandaxyzedu.com</p>
<p id= email_cc class="text-5">Cc: robert@xyzedu.com</p>

<p id="email_date" class="text-6">Wednesday, Aug 29, 05:40 pm</p>

<div class="arrow">
  <img class="next-arrow" src="images/next_arrow.png" alt="" width="7" height="10">
</div>

<p id= email_text class="text-7"><span class="text-style">Hello Amanda,</span><br><span class="text-style-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span><span class="text-style">et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span><br><span class="text-style-2">Thanks,</span><br><span class="text-style">Filip Szamborski</span></p>



NEXT STEPS BEFORE MEETING WEDNESDAY, 10/24/18:
-LET SEAN KNOW when making merge request to 'front-end-branch'

-fix divs (point 1)
--on email id, should we have a submit button?

-ben:
--new threads (point 3)
--making three top left things buttons (new emial maybe a link, not button?)

-after this, begin with jQuery and UX/UI:
--idea: onclick of email id line/search bar/thread comment, text clears away to type
--ideas: onSomething, online/offline has to be dynamic (same with notificaitons)
--ideas: onSomething when we search in top middle bar, it auto searches thru emails (w/ajax request?)

Sean:
--question on point 3
--when exactly do you want this done

--------------------------------------------------------------------------------------------

Questions/Things from meeting w/Ben Left To Do:
-make date shorter
-spacing is funky
-changing name of json url (/threads....)
-as email stays in inbox, date format changes
-change profile pic (<img src='photo'/>)


Notes from Sean:
1. Turning the components set to regular divs as default to dynamic components like inputs for sections associated to post requests (ie. comment text, reply modal to emails (will be part of new screens provided by Ben).

2. Make the screens vertically expandable when new content is compiled. If you keep appending comments using AJAX calls to the comments section, or threads to the second leftmost navbar, you can see content spilling over. It will great to have the html employ scroll bars to expand for the purpose of displaying the new content within the context of the general layout.

3. (feeds into point two) Adding new threads into the second leftmost navbar using a loop on the list coming in via the response involved first parsing out the html components corresponding to a single thread content box. That needs to be done for all levels of micro units (what are the html components that build up to a single email box within a thread seen in the main page, what are the html components that build up to a single comment box, how do you wrap these together such that in a given thread there can be multiple email boxes, each with its own set of comments and a new comment text box?)

4. From there we can discuss employing Jquery to employ proper toggling behavior, but we'll go into detail on this later.

GitLab notes from Sean:
1. git clone (fill in the repo's https url here) - to clone the repo
2. git branch (to list out all the branches...I've named the branches after your names)
3. git checkout (fill in your branch's name here)
4. git status (this will give you all the files under/not under git's tracking)
5. git add (followed by file names, OR just drag files into folder) (git add .)
This will let you 'station' the files for a commit. [git add .] will basically station everything for a commit
6. git commit -m "any message" (this will make the committed files ready for a push)
7. git push (this will push the changes you've committed into your branch)
Once your done, from the gitlab webpage go to your branch's page and make a merge request into the branch named 'front-end-branch'
