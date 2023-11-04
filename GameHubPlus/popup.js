article = [
	{
	  "source": {
		"id": "techcrunch",
		"name": "TechCrunch"
	  },
	  "author": "Jagmeet Singh",
	  "title": "Krafton India launches gaming incubator to expand local ecosystem | TechCrunch",
	  "description": "Krafton India has launched a gaming incubator in the South Asian nation as it seeks to expand the local ecosystem and support the domestic talent looking Krafton, the South Korean gaming giant that is known for PUBG and BGMI titles, has launched a gaming incu…",
	  "url": "https://techcrunch.com/2023/10/03/krafton-india-gaming-incubator/",
	  "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/krafton-india-ceo-sean-hyunil-sohn.jpeg?w=1024",
	  "publishedAt": "2023-10-03T19:29:07Z",
	  "content": "Krafton India has launched a gaming incubator in the South Asian nation as it seeks to expand the local ecosystem and support the domestic talent looking to enter the fast-growing gaming market.\r\nCal… [+5336 chars]"
	},
	{
	  "source": {
		"id": "polygon",
		"name": "Polygon"
	  },
	  "author": "Cameron Faulkner",
	  "title": "Lenovo Legion Go release date, price, and where to pre-order",
	  "description": "The Lenovo Legion Go is a portable gaming PC that joins the ranks of the Steam Deck and the Asus ROG Ally on Oct. 31. You can currently pre-order the $699 handheld from Best Buy and Micro Center.",
	  "url": "https://www.polygon.com/23852815/lenovo-legion-go-portable-pc-switch-features-specs-price",
	  "urlToImage": "https://cdn.vox-cdn.com/thumbor/HL6e4ihS7VjkIlGyf5OaF5oGGTQ=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24886930/legiongolead.jpg",
	  "publishedAt": "2023-09-01T04:00:00Z",
	  "content": "Lenovo has debuted its own handheld gaming PC to compete against the likes of the Steam Deck and the Asus ROG Ally. The Windows 11-powered Legion Go launches Oct. 31 starting at $699, and is currentl… [+3056 chars]"
	},
	{
	  "source": {
		"id": "ign",
		"name": "IGN"
	  },
	  "author": "Eric Song",
	  "title": "The Dell Intel Gamer Days Sale Starts Now: Big Savings on Alienware Gaming PCs, Laptops, Monitors, and Peripherals - IGN",
	  "description": "Some competitive AMD Ryzen gaming PCs included as well",
	  "url": "https://www.ign.com/articles/dell-intel-gamer-days-sale-starts-now-alienware-gaming-pcs-laptops",
	  "urlToImage": "https://assets-prd.ignimgs.com/2022/09/01/alienwarexbox-1662052068009.jpg?width=1280",
	  "publishedAt": "2022-09-01T17:37:12Z",
	  "content": "The Intel Gamer Days Event happens once a year, coinciding with the back to school season. This year, Dell is offering several newer models with Intel Alder Lake CPUs and RTX 30 series GPUs. These in… [+8260 chars]"
	},
	{
	  "source": {
		"id": "ign",
		"name": "IGN"
	  },
	  "author": "Eric Song",
	  "title": "Daily Deals: Save $50 Off the Microsoft Xbox Series X Gaming Console + Elite Series 2 Wireless Controller Bundle - IGN",
	  "description": null,
	  "url": "https://www.ign.com/articles/daily-deals-microsoft-xbox-series-x-gaming-console-elite-series-2-controller",
	  "urlToImage": "https://assets-prd.ignimgs.com/2022/09/01/090122-1662050863587.jpg?width=1280",
	  "publishedAt": "2022-09-01T17:05:23Z",
	  "content": "Check out the new hot daily deals for today, including a rare discount on an Xbox Series X gaming console bundle, $170 off the Apple AirPods Max headphones, $50 off the Bose SoundLik II portable Blue… [+12798 chars]"
	}
]
$(document).ready(function() {
	let stopwatch;
	let running = false;
	let seconds = 0;

	function formatTime (seconds) {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secs = seconds % 60;
		return `${ String(hours).padStart(2, '0') }:${ String(minutes).padStart(2, '0') }:${ String(secs).padStart(2, '0') }`;
	}

	function updateStopwatchDisplay () {
		$('#stopwatch-display').text(formatTime(seconds));
	}

	function startStopwatch () {
		stopwatch = setInterval(function() {
			seconds++;
			updateStopwatchDisplay();
		}, 1000);
		$('#start-stop').text('Stop');
		running = true;
	}

	$('#start-stop').on('click', function() {
		if (running) {
			clearInterval(stopwatch);
			$(this).text('Start');
		} else {
			startStopwatch();
		}
		running = !running;
	});

	$('#reset').on('click', function() {
		clearInterval(stopwatch);
		seconds = 0;
		updateStopwatchDisplay();
		$('#start-stop').text('Start');
		running = false;
	});
	startStopwatch();

	$('#news_para1').text(article[0].title);
	$('#news_para2').text(article[1].title);
	$('#news_para3').text(article[2].title);
	$('#news_para4').text(article[3].title);


	// News
	// const newsPara = document.getElementById("news_para");
	// if (newsPara) {
	// 	fetch("https://newsapi.org/v2/top-headlines?q=gaming&apiKey=83bc4c8c56c6467a90ec6900dd94a637")
	// 		.then((response) => response.json())
	// 		.then((newsData) => {
	// 			console.log(newsData);
	// 			const articles = newsData?.articles;
	// 			console.log(articles)
	// 			if (articles && articles.length > 0) {
	// 				const latestArticle = articles[0];
	// 				const newsTitle = latestArticle?.title;
	// 				const newsURL = latestArticle?.url;
	// 				console.log(latestArticle);
	// 				if (newsPara) {
	// 					newsPara.innerHTML = `<a href="${ newsURL }" target="_blank">${ newsTitle }</a>`;
	// 				}
	// 			} else {
	// 				newsPara.innerHTML = "No gaming news available at the moment. Check back later for updates.";
	// 				console.error('No articles found')
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error fetching news data:", error);
	// 			if (newsPara) {
	// 				newsPara.innerHTML = "Error fetching news data. Please try again later.";
	// 			}
	// 		});
	// }
	const newsPara = this.articles;
	console.log(newsPara);
	if (newsPara) {
		fetch("https://newsapi.org/v2/top-headlines?q=gaming&apiKey=83bc4c8c56c6467a90ec6900dd94a637")
			.then((response) => response.json())
			.then((newsData) => {
				console.log(newsData);
				const articles = newsData?.articles;
				console.log(articles)
				if (articles && articles.length > 0) {
					const latestArticle = articles[0];
					const newsTitle = latestArticle?.title;
					const newsURL = latestArticle?.url;
					console.log(latestArticle);
					if (newsPara) {
						newsPara.innerHTML = `<a href="${ newsURL }" target="_blank">${ newsTitle }</a>`;
					}
				} else {
					newsPara.innerHTML = "No gaming news available at the moment. Check back later for updates.";
					console.error('No articles found')
				}
			})
			.catch((error) => {
				console.error("Error fetching news data:", error);
				if (newsPara) {
					newsPara.innerHTML = "Error fetching news data. Please try again later.";
				}
			});
	}
	const firstArticleTitle = article[0].title;
	console.log(firstArticleTitle)
});