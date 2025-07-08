# Vocabulary Flow Documentation

## Overview
This document describes the vocabulary learning flow implemented in the Sanity CMS backend, which creates a hierarchical structure from Study Sections down to individual vocabulary words.

## Flow Structure

The vocabulary flow follows this hierarchy:

1. **Study Section** (`studySection`)
   - Main container for different types of content
   - Can be either "Test Section", "Vocabulary Section", or "Mixed Section"
   - Contains references to vocabulary content

2. **Vocabulary Content** (`vocabContent`)
   - Represents a vocabulary learning program or course
   - Contains multiple months of vocabulary learning
   - Has difficulty levels: Beginner, Intermediate, Advanced

3. **Vocabulary Month** (`vocabMonth`)
   - Represents a month in the vocabulary learning program
   - Contains multiple days of vocabulary learning
   - Has optional themes (e.g., "Business English", "Academic Words")

4. **Vocabulary Days** (`vocabDays`)
   - Represents a specific day in a month
   - Contains multiple vocabulary words
   - Has target word count for the day

5. **Vocabulary Words** (`vocabWords`)
   - Individual vocabulary words with detailed information
   - Contains word, meaning, example, pronunciation, part of speech, and tags
   - Maintains references to all parent levels for traceability

## Schema Features

### Study Section
- Section name and logo
- Section type (Test/Vocabulary/Mixed)
- Display order
- References to vocabulary contents

### Vocabulary Content
- Content name and description
- Difficulty level
- References to months
- Legacy types array for compatibility

### Vocabulary Month
- Month name and number (1-12)
- Year tracking
- Optional monthly theme
- References to days

### Vocabulary Days
- Day number and name
- Target word count
- References to words
- Active/inactive status

### Vocabulary Words
- Word details: name, meaning, example
- Pronunciation and part of speech
- Tags for categorization
- Complete reference chain (section → content → month → day)
- Display order

## Usage Example

To create a complete vocabulary learning program:

1. Create a Study Section named "Vocabulary" with type "vocabulary"
2. Create Vocabulary Content named "Daily English Words" with difficulty "intermediate"
3. Create Vocabulary Months for each month you want to cover
4. Create Vocabulary Days for each day in those months
5. Create Vocabulary Words for each day with all required details

## Reference Tracking

Each vocabulary word maintains references to:
- The day it belongs to
- The month it belongs to
- The content program it's part of
- The study section it's under

This allows for:
- Easy navigation through the hierarchy
- Tracking word progress through the learning program
- Organizing content by different criteria
- Maintaining data integrity across the flow

## API Integration

The schemas are designed to work with Sanity's GraphQL API, allowing frontend applications to:
- Query vocabulary words by section, content, month, or day
- Retrieve complete hierarchical information
- Track user progress through the vocabulary program
- Filter content by difficulty level or theme
