---
layout: layouts/article.tmpl.ts
createdAt: 2023-02-22
evergreen: true
title: This is only a test title that is very long and should wrap on the page please
description: I repeat, this is only a test. And specifically, this is a test description to appear under the H1 title.
tags:
  - article
  - electronics
---
## And this is a cat story - with a long title that should wrap and be super long and such

To pet a cat, rub its belly, endure blood and agony, quietly weep, keep rubbing belly run in circles, but loved it, hated it, loved it, hated it skid on floor, crash into wall . Russian blue i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?!

Leap into the air in greatest offense! yet pretend not to be evil yet has closed eyes but still sees you. Lie in the sink all day. Brown cats with pink ears. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock bite nose of your human for eat my own ears and show belly yet am in trouble, roll over.

Too cute for human to get mad. Cereal boxes make for five star accommodation attack curtains ignore the human until she needs to get up, then climb on her lap and sprawl plays league of legends for meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think.

### And this is a picture of a cat.

![random cat picture](http://placekitten.com/g/800/600)

## This is more testing

Like I said, this is an example text file. There is no real substance here. But we do have `code` snippets!

```
(mapcar #'car '((a b) (c d) (e f)))
     ⇒ (a c e)
(mapcar #'1+ [1 2 3])
     ⇒ (2 3 4)
(mapcar #'string "abc")
     ⇒ ("a" "b" "c")

;; Call each function in my-hooks.
(mapcar 'funcall my-hooks)

(defun mapcar* (function &rest args)
  "Apply FUNCTION to successive cars of all ARGS.
Return the list of results."
  ;; If no list is exhausted,
  (if (not (memq nil args))
      ;; apply function to CARs.
      (cons (apply function (mapcar #'car args))
            (apply #'mapcar* function
                   ;; Recurse for rest of elements.
                   (mapcar #'cdr args)))))

(mapcar* #'cons '(a b c) '(1 2 3 4))
     ⇒ ((a . 1) (b . 2) (c . 3))
```

## Here is a figure

#[Another random cat picture](http://placekitten.com/g/800/600)

And this is what text below a figure looks like.

> Did you know that this is a quote and this is what it looks like? - ME
