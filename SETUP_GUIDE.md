# Vocabulary Flow Setup Guide

## SOLUTION TO "Referenced document must be published" Error

The error occurs because you need to publish documents in the correct hierarchy order. Here's the step-by-step solution:

## Publishing Order (MANDATORY!)

Follow this exact order to avoid reference errors:

### 1. ✅ Study Section (First)
```
Name: "Vocabulary Learning"
Description: "Complete vocabulary learning program"
```
**→ PUBLISH THIS FIRST**

### 2. ✅ Vocabulary Content (Second)
```
Name: "Daily English Words"
Study Section: [Select the published Study Section from step 1]
```
**→ PUBLISH THIS SECOND**

### 3. ✅ Vocabulary Month (Third)
```
Month Name: "January"
Year: 2025
Vocabulary Content: [Select the published Vocab Content from step 2]
```
**→ PUBLISH THIS THIRD**

### 4. ✅ Vocabulary Days (Fourth)
```
Day Name: "New Year Vocabulary"
Day Number: 1
Vocabulary Month: [Select the published Vocab Month from step 3]
```
**→ PUBLISH THIS FOURTH**

### 5. ✅ Vocabulary Words (Final)
```
Word: "Hello"
Meaning: [Rich text content]
Example: [Rich text content]
Study Section: [Select published Study Section]
Vocabulary Content: [Select published Vocab Content]
Vocabulary Month: [Select published Vocab Month]
Vocabulary Day: [Select published Vocab Day]
```
**→ PUBLISH THIS LAST**

## Quick Fix for Current Error

If you're seeing the error right now:

1. **Cancel** the current document creation
2. Go back and **publish** all parent documents first
3. **Refresh** the Sanity Studio (F5)
4. Try creating the vocabulary word again

## Why This Happens

Sanity prevents you from referencing unpublished documents to maintain data integrity. Each level must be published before the next level can reference it.

## Pro Tips

- ✅ Always work from top to bottom in the hierarchy
- ✅ Publish each level before moving to the next
- ✅ Refresh the Studio if you don't see recently published documents
- ✅ Use meaningful names to easily identify documents

## Flow Summary

Study Section → Vocab Content → Vocab Month → Vocab Days → Vocab Words

Each arrow (→) represents a "must be published before" relationship.
