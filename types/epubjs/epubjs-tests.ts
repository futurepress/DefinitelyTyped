import ePub, { Book } from 'epubjs';

function testEpub() {
  const epub = new ePub("https://s3.amazonaws.com/moby-dick/moby-dick.epub");

  const book = new Book("https://s3.amazonaws.com/moby-dick/moby-dick.epub", {});
}

testEpub();
