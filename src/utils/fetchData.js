import axios from "axios";
import cookies from 'js-cookie';

export const apiheader = {
    headers: {
        'X-Requested-With': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept-Language': cookies.get('i18next'),
    }
};


export const GetData = async (url, header) => {
    let { data } = await axios.get(url, header);
    return data;
}

export const PostData = async (url, body, header) => {
    let data = await axios.post(url, body, header);
    return data;
}
/**
 
 
   <!-- This site is optimized with the Yoast SEO plugin v21.7 - https://yoast.com/wordpress/plugins/seo/ -->
   <title>الرئيسية &#8211; ناقرو | شركة دليل الخبرة للمحاماة</title>
   <meta name="description" content="شركة دليل الخبرة للمحاماة هي مجموعة من المحامين الذين لديهم أكثر من 28 عامًا من الخبرة في جميع فروع القانون. نتميز بالالتزام والمصداقية." />
   <link rel="canonical" href="https://nagro.com.sa/" />
   <meta property="og:locale" content="ar_AR" />
   <meta property="og:locale:alternate" content="en_US" />
   <meta property="og:type" content="website" />
   <meta property="og:title" content="الرئيسية &#8211; ناقرو | شركة دليل الخبرة للمحاماة" />
   <meta property="og:description" content="شركة دليل الخبرة للمحاماة هي مجموعة من المحامين الذين لديهم أكثر من 28 عامًا من الخبرة في جميع فروع القانون. نتميز بالالتزام والمصداقية." />
   <meta property="og:url" content="https://nagro.com.sa/" />
   <meta property="og:site_name" content="ناقرو | شركة دليل الخبرة للمحاماة" />
   <meta property="article:publisher" content="https://www.facebook.com/pages/category/Professional-Service/%d9%85%d9%83%d8%aa%d8%a8-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d8%b4%d8%a7%d8%b1-%d8%b7%d9%84%d8%b9%d8%aa-%d9%86%d8%a7%d9%82%d8%b1%d9%88-245542828899404/" />
   <meta property="article:modified_time" content="2022-02-28T21:39:09+00:00" />
   <meta property="og:image" content="https://nagro.com.sa/wp-content/uploads/2022/01/wide-no-t.png" />
   <meta name="twitter:card" content="summary_large_image" />
   <meta name="twitter:site" content="@nagrocom" />
   <script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://nagro.com.sa/","url":"https://nagro.com.sa/","name":"الرئيسية &#8211; ناقرو | شركة دليل الخبرة للمحاماة","isPartOf":{"@id":"https://nagro.com.sa/#website"},"about":{"@id":"https://nagro.com.sa/#organization"},"primaryImageOfPage":{"@id":"https://nagro.com.sa/#primaryimage"},"image":{"@id":"https://nagro.com.sa/#primaryimage"},"thumbnailUrl":"https://nagro.com.sa/wp-content/uploads/2022/01/wide-no-t.png","datePublished":"2020-04-13T08:18:54+00:00","dateModified":"2022-02-28T21:39:09+00:00","description":"شركة دليل الخبرة للمحاماة هي مجموعة من المحامين الذين لديهم أكثر من 28 عامًا من الخبرة في جميع فروع القانون. نتميز بالالتزام والمصداقية.","breadcrumb":{"@id":"https://nagro.com.sa/#breadcrumb"},"inLanguage":"ar","potentialAction":[{"@type":"ReadAction","target":["https://nagro.com.sa/"]}]},{"@type":"ImageObject","inLanguage":"ar","@id":"https://nagro.com.sa/#primaryimage","url":"https://nagro.com.sa/wp-content/uploads/2022/01/wide-no-t.png","contentUrl":"https://nagro.com.sa/wp-content/uploads/2022/01/wide-no-t.png","width":880,"height":180},{"@type":"BreadcrumbList","@id":"https://nagro.com.sa/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://nagro.com.sa/#website","url":"https://nagro.com.sa/","name":"ناقرو | شركة دليل الخبرة للمحاماة","description":"الموقغ الرسمي لشركة دليل الخبرة ببمحاماة والاستشارات القانونية","publisher":{"@id":"https://nagro.com.sa/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://nagro.com.sa/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"ar"},{"@type":"Organization","@id":"https://nagro.com.sa/#organization","name":"شركة دليل الخبرة للمحاماة","url":"https://nagro.com.sa/","logo":{"@type":"ImageObject","inLanguage":"ar","@id":"https://nagro.com.sa/#/schema/logo/image/","url":"https://nagro.com.sa/wp-content/uploads/2021/10/wide.png","contentUrl":"https://nagro.com.sa/wp-content/uploads/2021/10/wide.png","width":910,"height":263,"caption":"شركة دليل الخبرة للمحاماة"},"image":{"@id":"https://nagro.com.sa/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/pages/category/Professional-Service/مكتب-المستشار-طلعت-ناقرو-245542828899404/","https://twitter.com/nagrocom","https://www.instagram.com/talaatnagro/","https://www.linkedin.com/company/مكتب-المستشار-طلعت-ناقرو-للاستشارات-الادارية-والعمالية---التوظيف-الاهلى"]}]}</script>
   <!-- / Yoast SEO plugin. -->

*/