<template>
 <span>
   <div v-for="item in entries" v-html="item"></div>
 </span>
</template>
<script>
function unescapeHTML(escapedHTML) {
  return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}
function decodeHtmlCharCodes(str) { 
  return str.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
    return String.fromCharCode(charCode);
  });
}

function escape (text)
{
  return text.replace(/[<>\&\"\']/g, function(c) {
    return '&#' + c.charCodeAt(0) + ';';
  });
}
function ConvChar( str ) {
  c = {'<':'&lt;', '>':'&gt;', '&':'&amp;', '"':'&quot;', "'":'&#039;',
       '#':'&#035;' };
  return str.replace( /[<&>'"#]/g, function(s) { return c[s]; } );
}
export default {
  name: 'FormaterGepViewer',
  components: {
  },
  props: {
    gepUrl: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      url: null,
      entries: []
    }
  },
  mounted () {
    if (this.gepUrl) {
      let _this = this
      this.$http.get(this.gepUrl).then(
          response => { _this.parseXML(response) },
          response => { _this.handleError('no_file')}
        )
    }
  },
  methods: {
    parseXML (response) {
      let parser = new DOMParser()
      let xml = parser.parseFromString(response.body, "application/xml")
      let feed = xml.documentElement
      if (!feed.nodeName) {
        _this.handleError('unreadable_file')
      } 
      let entries = feed.querySelectorAll('entry')
      for(let i=0; i < entries.length; i++){
           let summary = entries[i].querySelector('summary')
           console.log(decodeHtmlCharCodes(summary.innerHTML))
           this.entries.push(unescapeHTML(summary.innerHTML))
      }
    },
    handleError () {
      
    },
    extractDataFromEntry () {
      
    }
  }
}
</script>