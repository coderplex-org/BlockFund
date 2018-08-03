<template>
    <span class="p-5">
        <div class="project-header p-4">
          <div class="creator-info float-left mr-5">
            <img class="rounded-circle img-fluid mb-4" style="width: 3.2rem;" :src="project.creator.imgSrc" alt=""><br>
            <span> By {{ project.creator.name }}</span><br>
            <span style="color: #656969;">{{ project.creator.totalProjects }} created</span><br>
            <button class="mt-2 btn btn-sm btn-secondary">Follow Creator</button>
          </div>
          <div>
            <h2>{{ project.title }}</h2>
            <p style="font-size: 1.2rem; color: #656969;">{{ project.description }}</p>
          </div>
        </div>
        <div class="project-info mt-5">
          <div class="row">
            <div class="col-md-8 p-2">
              <img :src="project.imgSrc" alt="" style="width: 100%;">
            </div>
            <div class="col-md-4 p-2">
              <div class="mb-3" style="width: 100%; background-color: #037362;height: 0.3rem;"></div>
              <div class="mb-3">
                <h2 style="color: #037362; margin-bottom: 0;">{{ project.amount }} BLC</h2>
                <span style="color: #656969;">pledged of {{ project.total }} BLC goal</span>
              </div>
              <div class="mb-3">
                <h2 style="margin-bottom: 0;">{{ project.backers }}</h2>
                <span style="color: #656969;">backers</span>
              </div>
              <div class="mb-3">
                <h2 style="margin-bottom: 0;">{{ project.remainingDays }}</h2>
                <span style="color: #656969;">days to go</span>
              </div>
              <button class="btn btn-success btn-block">Back this project</button>
            </div>
          </div>
        </div>
        <hr>
        <div class="project-content">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="campaign-tab" data-toggle="tab" href="#campaign" role="tab" aria-controls="campaign" aria-selected="true">Campaign</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="faq-tab" data-toggle="tab" href="#faq" role="tab" aria-controls="faq" aria-selected="false">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="updates-tab" data-toggle="tab" href="#updates" role="tab" aria-controls="updates" aria-selected="false">Updates</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="comments-tab" data-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false">Comments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="community-tab" data-toggle="tab" href="#community" role="tab" aria-controls="community" aria-selected="false">Community</a>
            </li>
          </ul>
          <div class="tab-content p-5" id="myTabContent">
            <div class="tab-pane fade show active" id="campaign" role="tabpanel" aria-labelledby="campaign-tab">
              <h2>Campaign</h2>
            </div>
            <div class="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
              <h2>FAQ</h2>
            </div>
            <div class="tab-pane fade" id="updates" role="tabpanel" aria-labelledby="updates-tab">
              <h2>Updates</h2>
            </div>
            <div class="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
              <h2>Comments</h2>
            </div>
            <div class="tab-pane fade" id="community" role="tabpanel" aria-labelledby="community-tab">
              <h2>Community</h2>
            </div>
          </div>
        </div>
    </span>
</template>

<script>
export default {
  name: 'ProjectView',
  data () {
    return {
      projectsMap: {
        1: {
          id: 1,
          title: 'The Oasis of Missed Connections',
          creator: {
            name: 'The Gardeners',
            imgSrc: 'https://ksr-ugc.imgix.net/assets/006/141/714/b2ca0c38f6ef6a9592eda6d6f76000b8_original.jpg?w=220&h=220&fit=crop&v=1461369200&auto=format&q=92&s=a355c612b630e05ea857f032db467e35',
            totalProjects: 2
          },
          description: 'A tree of light to provide shelter in the desert, fun in the sun, a beacon in the night, and a home for the Book of Missed Connections.',
          amount: 200,
          total: 2000,
          remainingDays: 2,
          backers: 235,
          imgSrc: 'https://ksr-ugc.imgix.net/assets/011/811/170/3ea5ba47eeca8fb3219f9150e27e9e80_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463698047&auto=format&q=92&s=124442907f2364220776efb9fc8f7c6c'
        },
        2: {
          id: 2,
          title: 'Indian Slide Guitar (The Kolkata Groove)',
          creator: {
            name: 'Mike Brenner',
            imgSrc: 'https://ksr-ugc.imgix.net/assets/006/099/720/242a0fcaf5eb1c0d3b970d5753ef98d0_original.jpg?w=220&h=220&fit=crop&v=1461366493&auto=format&q=92&s=aa6d698dd29511cf88fa4d6a00093519',
            totalProjects: 2
          },
          description: 'This project sends me to Kolkata, India to study & record with Indian musicians, in search of the ultimate Indian slide guitar groove.',
          amount: 1000,
          total: 24000,
          remainingDays: 200,
          backers: 25,
          imgSrc: 'https://ksr-ugc.imgix.net/assets/011/292/405/feb29a47344b0496d76bcf200be06bf0_original.png?crop=faces&w=1552&h=873&fit=crop&v=1463680556&auto=format&q=92&s=c046508d1a3ba637fc318414ce54a83d'
        },
        3: {
          id: 3,
          title: 'Spyra One: The next generation of water guns.',
          creator: {
            name: 'Spyra',
            imgSrc: 'https://ksr-ugc.imgix.net/assets/016/928/337/a07e8d7f66c63ab827ac0a4c5924a908_original.png?w=160&h=160&fit=crop&v=1529409762&auto=format&q=92&s=6ecc94f104f5345f14ae7d5ed3dfee63',
            totalProjects: 2
          },
          description: 'Clear hits, auto-refill, constant pressure: Spyra One takes water fights to the next level.',
          amount: 20,
          total: 1000,
          remainingDays: 21,
          backers: 5,
          imgSrc: 'https://ksr-ugc.imgix.net/assets/021/641/481/31bd417c7edc620a2e45886dbfec8f2b_original.jpg?crop=faces&w=560&h=315&fit=crop&v=1532593160&auto=format&q=92&s=30d796c0b66ef48f97f3405a7e4e8bc1'
        },
        4: {
          id: 4,
          title: 'GoCube | The Classic Puzzle Reinvented',
          creator: {
            name: 'GoCube',
            imgSrc: 'https://ksr-ugc.imgix.net/assets/021/463/278/0cabf08cb801c4096616b9af75a317cb_original.png?w=220&h=220&fit=crop&v=1528124463&auto=format&q=92&s=1e7cb0ee35ae276cd8a1b1f65c1a9c3b',
            totalProjects: 2
          },
          description: 'An incredible smart connected cube with tracking and whole new way to cube. Learn, improve, and even compete.',
          amount: 1980,
          total: 1900,
          remainingDays: 1,
          backers: 892,
          imgSrc: 'https://ksr-ugc.imgix.net/assets/021/463/146/97672225d1ba7ed9ac3ef82d7a0d748e_original.png?crop=faces&w=560&h=315&fit=crop&v=1528807728&auto=format&q=92&s=660e30bf6bb9a3123013542010e4c9e3'
        },
        5: {
          id: 5,
          title: 'Domio Pro - a game changer in helmet audio & communication',
          creator: {
            name: 'Domio Sports',
            imgSrc: 'https://ksr-ugc.imgix.net/assets/021/548/160/fb4b4dab0764795573e9cb1b6af78a68_original.jpg?w=220&h=220&fit=crop&v=1528766255&auto=format&q=92&s=db8785547b1fc6adce829991a525b430',
            totalProjects: 2
          },
          description: 'The wireless Domio Pro mounts to any helmet and transforms it into a surround sound audio and voice communication system.',
          amount: 2000,
          total: 3000,
          remainingDays: 20,
          backers: 900,
          imgSrc: 'https://ksr-ugc.imgix.net/assets/021/482/324/2890cbcf232ab30df4dade96b48c9cf4_original.png?crop=faces&w=560&h=315&fit=crop&v=1533159189&auto=format&q=92&s=b733245e01568489d367dab023c6cbda'
        }
      }
    }
  },
  computed: {
    project () {
      var vm = this
      return vm.projectsMap[vm.$route.params.id]
    }
  }
}
</script>

<style>
  a[aria-selected="true"] {
    border-bottom: 3px solid #282828 !important;
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    color: #020621 !important;
    font-weight: 600;
  }
  a[aria-selected="true"]:hover, a[aria-selected="false"]:hover {
    color: #2f9e74 !important;
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    border-bottom:0;
  }
  a[aria-selected="false"] {
    color: #2e2828 !important;
  }

</style>
