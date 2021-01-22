---
title: Search
layout: default
---
<script src="https://unpkg.com/lunr/lunr.js"></script>

<form id="search-form" class="search-form search-form--blocked">
    <input autofocus id="search-field" type="search" placeholder="Search..." />
    <button type="submit" class="mi-button mi-button--primary mi-button--small">Search</button>
</form>

<div id="search-results"></div>

<template id="search-result-template">
    <div class="search-result">
        <a id="sr-link" href=""></a>
        <p id="sr-linktext"></p>
    </div>
</template>

<template id="no-search-results-template">
    <p class="search-results-no-match">
        Your search "<span id="nsr-term"></span>" did not match any documents.
    </p>
</template>

<script>
const searchForm = document.getElementById('search-form');
const searchResultsElement = document.getElementById('search-results');

const search = () => {
    const searchTerm = document.getElementById('search-field').value;

    // Don't search when search term is two characters or less
    if (searchTerm.length < 3) {
        return;
    }

    // Perform search in lunr
    const searchResults = window.searchIdx.search(searchTerm, {
        bool: 'OR',
        expand: true
    });

    searchResultsElement.innerHTML = '';

    if (searchResults.length) {
        searchResults.forEach(addSearchResult);
    } else {
        addNothingFoundMessage(searchTerm);
    }

};

const addSearchResult = searchResult => {
    const template = document.getElementById('search-result-template');
    const searchResultElement = template.content.cloneNode(true);

    const post = window.posts.find(indexedPost => indexedPost.url === searchResult.ref);

    searchResultElement.getElementById('sr-link').innerHTML = post.title
    searchResultElement.getElementById('sr-link').setAttribute('href',searchResult.ref);

    searchResultElement.getElementById('sr-linktext').innerHTML = searchResult.ref;

    searchResultsElement.appendChild(searchResultElement);
};

const addNothingFoundMessage = (searchTerm) => {
    const template = document.getElementById('no-search-results-template');
    const noSearchResultElement = template.content.cloneNode(true);

    noSearchResultElement.getElementById('nsr-term').innerHTML = searchTerm;

    searchResultsElement.appendChild(noSearchResultElement);
}

fetch('/search.json')
    .then(response => response.json())
    .then(searchIndex => {
        window.posts = searchIndex;
        searchForm.classList.remove('search-form--blocked');
        searchForm.addEventListener('submit', event => {
            event.preventDefault();
            search();
        });

        window.searchIdx = lunr(function () {
            this.ref('url');
            this.field('title');

            posts.forEach(function (doc) {
                this.add(doc)
            }, this);
        });

        search(); // If search field has content, eg. when going back to the search page from a result.
    });
</script>
