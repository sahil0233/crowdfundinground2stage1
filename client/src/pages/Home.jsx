import React, { useState, useEffect } from 'react';
// campaign prediction test
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import { dalle,one,two,three,environment,business,
  community,
  competition,
  creative,
  event,
  faith,family,
  sports,
  travel,
  volunteer,
  wishes } from '../assets';
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <div>
      <div className='w-full relative'>
        <img src={dalle} className='w-full mx-auto h-52 sm:h-96'/>
        <section class="w-[250px] top-44 md:w-[600px] absolute left-1/2 transform -translate-x-1/2 left- bg-white rounded-lg shadow-lg px-4 py-4 sm:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:top-80">
          <div class="text-center">
            <h2 class="sm:text-2xl font-bold text-gray-800 sm:mb-2">Rs. 1930 Crs + Raised</h2>
          </div>
          <div class="text-center">
            <h2 class="sm:text-2xl font-bold text-gray-800 sm:mb-2">636,000 + Fundraisers</h2>
          </div>
          <div class="text-center">
            <h2 class="sm:text-2xl font-bold text-gray-800 sm:mb-2">79 lakhs + Donations</h2>
          </div>
        </section>
        <div className='ml-10 md:mt-52 mt-72'>
          <ol className='flex flex-col md:flex-row justify-evenly sm:flex-nowrap'>
            <li className='mb-4 flex-1 flex md:flex-col'>
              <div className='flex flex-col md:flex-row'>
                <div class="md:mb-10 font-bold text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-[#54E6BC] text-white">
                  1
                </div>

                <svg className="transform md:rotate-0  -rotate-90 w-[60px] h-[40px] mt-3 -ml-3 md:h-full md:w-full md:-mt-12 md:ml-2" viewBox="0 0 229 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.61401 18.6273C5.87057 18.5252 5.99575 18.2344 5.8936 17.9779C5.79146 17.7213 5.50068 17.5961
                   5.24412 17.6983L5.61401 18.6273ZM14.3063 14.371C14.0447 14.4595 13.9043 14.7432 13.9927 15.0048C14.0812 
                   15.2664 14.3649 15.4068 14.6265 15.3184L14.3063 14.371ZM23.7744 12.4677C24.0398 12.3916 24.1933 12.1147 
                   24.1173 11.8493C24.0412 11.5838 23.7643 11.4303 23.4988 11.5064L23.7744 12.4677ZM32.8177 9.049C32.5493 
                   9.11392 32.3843 9.38413 32.4492 9.65253C32.5141 9.92093 32.7843 10.0859 33.0527 10.021L32.8177 9.049ZM42.4298 7.94233C42.7005 7.88756 42.8755 7.62376 42.8207 7.3531C42.766 7.08244 42.5022 6.90742 42.2315 6.96219L42.4298 7.94233ZM51.7041 5.2158C51.4317 5.2613 51.2478 5.51899 51.2933 5.79136C51.3388 6.06372 51.5965 6.24764 51.8689 6.20214L51.7041 5.2158ZM61.3596 4.77048C61.6333 4.73349 61.8252 4.48167 61.7882 4.20801C61.7512 3.93436 61.4993 3.7425 61.2257 3.77949L61.3596 4.77048ZM70.7887 2.62825C70.5141 2.65736 70.3151 2.90358 70.3442 3.17818C70.3733 3.45278 70.6195 3.65179 70.8941 3.62267L70.7887 2.62825ZM80.4592 2.73885C80.7345 2.71707 80.94 2.47625 80.9182 2.20097C80.8964 1.92569 80.6556 1.72018 80.3803 1.74196L80.4592 2.73885ZM89.9895 1.10351C89.7138 1.11841 89.5023 1.35402 89.5172 1.62976C89.5321 1.9055 89.7677 2.11695 90.0435 2.10205L89.9895 1.10351ZM99.6404 1.69777C99.9164 1.68937 100.133 1.45881 100.125 1.18279C100.117 0.906779 99.886 0.689834 99.61 0.698234L99.6404 1.69777ZM109.238 0.514117C108.962 0.516323 108.74 0.741961 108.742 1.01809C108.744 1.29423 108.97 1.51629 109.246 1.51409L109.238 0.514117ZM118.852 1.54149C119.128 1.54523 119.355 1.32443 119.359 1.04831C119.363 0.772195 119.142 0.545322 118.866 0.541577L118.852 1.54149ZM128.487 0.773034C128.211 0.763523 127.98 0.979537 127.97 1.25552C127.961 1.53149 128.177 1.76293 128.453 1.77244L128.487 0.773034ZM138.052 2.20201C138.328 2.21717 138.564 2.00594 138.579 1.73021C138.594 1.45449 138.383 1.21868 138.107 1.20351L138.052 2.20201ZM147.72 1.8301C147.445 1.80934 147.205 2.01574 147.184 2.2911C147.163 2.56646 147.37 2.80651 147.645 2.82727L147.72 1.8301ZM157.216 3.64669C157.491 3.67305 157.735 3.47159 157.762 3.19671C157.788 2.92182 157.587 2.67762 157.312 2.65126L157.216 3.64669ZM166.871 3.66767C166.597 3.63562 166.349 3.83198 166.316 4.10626C166.284 4.38053 166.481 4.62886 166.755 4.66091L166.871 3.66767ZM176.302 5.88028C176.575 5.91824 176.828 5.72728 176.866 5.45376C176.904 5.18024 176.713 4.92773 176.439 4.88977L176.302 5.88028ZM185.959 6.3204C185.687 6.27622 185.43 6.46138 185.386 6.73396C185.342 7.00655 185.527 7.26334 185.799 7.30752L185.959 6.3204ZM195.257 8.95878C195.528 9.00969 195.79 8.83094 195.841 8.55953C195.891 8.28812 195.713 8.02683 195.441 7.97592L195.257 8.95878ZM204.89 9.88168C204.621 9.82324 204.354 9.99466 204.296 10.2645C204.237 10.5344 204.409 10.8006 204.679 10.859L204.89 9.88168ZM214.031 13.0392C214.299 13.1064 214.571 12.9437 214.638 12.6759C214.705 12.408 214.542 12.1364 214.275 12.0692L214.031 13.0392ZM223.554 14.5891C223.289 14.5111 223.011 14.6627 222.933 14.9276C222.855 15.1925 223.006 15.4704 223.271 15.5484L223.554 14.5891ZM1.19832 20.4591C2.65235 19.8308 4.12456 19.2203 5.61401 18.6273L5.24412 17.6983C3.74593 18.2947 2.2648 18.9089 0.801675 19.5411L1.19832 20.4591ZM14.6265 15.3184C17.621 14.3062 20.6725 13.3567 23.7744 12.4677L23.4988 11.5064C20.3827 12.3995 17.3163 13.3536 14.3063 14.371L14.6265 15.3184ZM33.0527 10.021C36.1398 9.27437 39.2675 8.58217 42.4298 7.94233L42.2315 6.96219C39.0574 7.60441 35.9174 8.29932 32.8177 9.049L33.0527 10.021ZM51.8689 6.20214C55.0073 5.67784 58.1728 5.20125 61.3596 4.77048L61.2257 3.77949C58.0289 4.21161 54.8532 4.68973 51.7041 5.2158L51.8689 6.20214ZM70.8941 3.62267C74.069 3.28605 77.2592 2.99204 80.4592 2.73885L80.3803 1.74196C77.1717 1.99584 73.9727 2.29065 70.7887 2.62825L70.8941 3.62267ZM90.0435 2.10205C93.2398 1.92931 96.4405 1.79515 99.6404 1.69777L99.61 0.698234C96.4025 0.795847 93.1939 0.930337 89.9895 1.10351L90.0435 2.10205ZM109.246 1.51409C112.456 1.48845 115.66 1.49819 118.852 1.54149L118.866 0.541577C115.667 0.498183 112.455 0.48842 109.238 0.514117L109.246 1.51409ZM128.453 1.77244C131.672 1.8834 134.874 2.02723 138.052 2.20201L138.107 1.20351C134.922 1.02837 131.714 0.884236 128.487 0.773034L128.453 1.77244ZM147.645 2.82727C150.869 3.07026 154.061 3.3441 157.216 3.64669L157.312 2.65126C154.15 2.34803 150.951 2.0736 147.72 1.8301L147.645 2.82727ZM166.755 4.66091C169.988 5.03875 173.173 5.44603 176.302 5.88028L176.439 4.88977C173.303 4.45452 170.111 4.04634 166.871 3.66767L166.755 4.66091ZM185.799 7.30752C189.028 7.83079 192.183 8.38223 195.257 8.95878L195.441 7.97592C192.359 7.39781 189.196 6.84495 185.959 6.3204L185.799 7.30752ZM204.679 10.859C207.915 11.5598 211.037 12.2879 214.031 13.0392L214.275 12.0692C211.269 11.3152 208.137 10.5846 204.89 9.88168L204.679 10.859ZM223.271 15.5484C224.845 16.0116 226.371 16.4811 227.847 16.9559L228.153 16.004C226.669 15.5265 225.135 15.0546 223.554 14.5891L223.271 15.5484Z" fill="#C8C8C8"></path>
                </svg>
              </div>
              <div className='pl-4 md:pl-0'>
                <h2 className='text-2xl font-semibold mb-1'>Start with basics</h2>
                <p className='text-[#767676]'>Kick things off with your name and location</p>
              </div>
            </li>
            <li className='mb-4 flex-1 flex md:flex-col'>
              <div className='flex flex-col md:flex-row'>
              <div class="md:mb-10 font-bold text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-[#54E6BC] text-white">
                2
              </div>
              <svg className="transform md:rotate-0 -rotate-90 w-[60px] h-[40px] -ml-1 mt-3 md:h-full md:w-full md:mt-1 md:ml-1" viewBox="0 0 229 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M223.386 2.37266C223.129 2.47481 223.004 2.76559 223.106 3.02215C223.209 3.2787 223.499 3.40388 223.756 3.30173L223.386 2.37266ZM214.694 6.62897C214.955 6.54055 215.096 6.2568 215.007 5.99519C214.919 5.73359 214.635 5.5932 214.373 5.68162L214.694 6.62897ZM205.226 8.53229C204.96 8.60838 204.807 8.88525 204.883 9.1507C204.959 9.41616 205.236 9.56967 205.501 9.49359L205.226 8.53229ZM196.182 11.951C196.451 11.8861 196.616 11.6159 196.551 11.3475C196.486 11.0791 196.216 10.9141 195.947 10.979L196.182 11.951ZM186.57 13.0577C186.3 13.1124 186.124 13.3762 186.179 13.6469C186.234 13.9176 186.498 14.0926 186.768 14.0378L186.57 13.0577ZM177.296 15.7842C177.568 15.7387 177.752 15.481 177.707 15.2086C177.661 14.9363 177.404 14.7524 177.131 14.7979L177.296 15.7842ZM167.64 16.2295C167.367 16.2665 167.175 16.5183 167.212 16.792C167.249 17.0656 167.501 17.2575 167.774 17.2205L167.64 16.2295ZM158.211 18.3717C158.486 18.3426 158.685 18.0964 158.656 17.8218C158.627 17.5472 158.38 17.3482 158.106 17.3773L158.211 18.3717ZM148.541 18.2611C148.266 18.2829 148.06 18.5237 148.082 18.799C148.104 19.0743 148.344 19.2798 148.62 19.258L148.541 18.2611ZM139.01 19.8965C139.286 19.8816 139.498 19.646 139.483 19.3702C139.468 19.0945 139.232 18.883 138.957 18.8979L139.01 19.8965ZM129.36 19.3022C129.084 19.3106 128.867 19.5412 128.875 19.8172C128.883 20.0932 129.114 20.3102 129.39 20.3018L129.36 19.3022ZM119.762 20.4859C120.038 20.4837 120.26 20.258 120.258 19.9819C120.256 19.7058 120.03 19.4837 119.754 19.4859L119.762 20.4859ZM110.148 19.4585C109.872 19.4548 109.645 19.6756 109.641 19.9517C109.637 20.2278 109.858 20.4547 110.134 20.4584L110.148 19.4585ZM100.513 20.227C100.789 20.2365 101.02 20.0205 101.03 19.7445C101.039 19.4685 100.823 19.2371 100.547 19.2275L100.513 20.227ZM90.9475 18.798C90.6718 18.7828 90.436 18.9941 90.4208 19.2698C90.4057 19.5455 90.6169 19.7813 90.8926 19.7965L90.9475 18.798ZM81.2798 19.1699C81.5552 19.1906 81.7952 18.9842 81.816 18.7089C81.8367 18.4335 81.6303 18.1935 81.355 18.1727L81.2798 19.1699ZM71.7838 17.3533C71.5089 17.3269 71.2647 17.5284 71.2384 17.8033C71.212 18.0782 71.4135 18.3224 71.6883 18.3487L71.7838 17.3533ZM62.1289 17.3323C62.4031 17.3644 62.6515 17.168 62.6835 16.8937C62.7156 16.6195 62.5192 16.3711 62.2449 16.3391L62.1289 17.3323ZM52.6981 15.1197C52.4246 15.0817 52.1721 15.2727 52.1341 15.5462C52.0962 15.8197 52.2871 16.0723 52.5606 16.1102L52.6981 15.1197ZM43.0407 14.6796C43.3133 14.7238 43.5701 14.5386 43.6143 14.266C43.6585 13.9934 43.4733 13.7366 43.2007 13.6925L43.0407 14.6796ZM33.743 12.0412C33.4716 11.9903 33.2103 12.169 33.1594 12.4404C33.1085 12.7119 33.2873 12.9732 33.5587 13.0241L33.743 12.0412ZM24.1096 11.1183C24.3795 11.1767 24.6456 11.0053 24.7041 10.7354C24.7625 10.4655 24.5911 10.1994 24.3212 10.141L24.1096 11.1183ZM14.9688 7.96081C14.7009 7.89361 14.4293 8.05627 14.3621 8.32411C14.2949 8.59195 14.4576 8.86355 14.7254 8.93075L14.9688 7.96081ZM5.44643 6.41088C5.71134 6.48885 5.98929 6.33731 6.06726 6.07241C6.14523 5.8075 5.9937 5.52954 5.72879 5.45157L5.44643 6.41088ZM227.802 0.540901C226.348 1.16918 224.875 1.77966 223.386 2.37266L223.756 3.30173C225.254 2.70526 226.735 2.09108 228.198 1.45887L227.802 0.540901ZM214.373 5.68162C211.379 6.69378 208.327 7.64325 205.226 8.53229L205.501 9.49359C208.617 8.60046 211.684 7.64636 214.694 6.62897L214.373 5.68162ZM195.947 10.979C192.86 11.7256 189.732 12.4178 186.57 13.0577L186.768 14.0378C189.943 13.3956 193.083 12.7007 196.182 11.951L195.947 10.979ZM177.131 14.7979C173.993 15.3222 170.827 15.7987 167.64 16.2295L167.774 17.2205C170.971 16.7884 174.147 16.3103 177.296 15.7842L177.131 14.7979ZM158.106 17.3773C154.931 17.7139 151.741 18.008 148.541 18.2611L148.62 19.258C151.828 19.0042 155.027 18.7093 158.211 18.3717L158.106 17.3773ZM138.957 18.8979C135.76 19.0707 132.559 19.2048 129.36 19.3022L129.39 20.3018C132.598 20.2041 135.806 20.0697 139.01 19.8965L138.957 18.8979ZM119.754 19.4859C116.544 19.5115 113.34 19.5018 110.148 19.4585L110.134 20.4584C113.333 20.5018 116.545 20.5116 119.762 20.4859L119.754 19.4859ZM100.547 19.2275C97.3277 19.1166 94.1259 18.9728 90.9475 18.798L90.8926 19.7965C94.0777 19.9716 97.2864 20.1158 100.513 20.227L100.547 19.2275ZM81.355 18.1727C78.1314 17.9297 74.939 17.6559 71.7838 17.3533L71.6883 18.3487C74.8502 18.652 78.0495 18.9264 81.2798 19.1699L81.355 18.1727ZM62.2449 16.3391C59.0118 15.9612 55.8271 15.554 52.6981 15.1197L52.5606 16.1102C55.6969 16.5455 58.8887 16.9536 62.1289 17.3323L62.2449 16.3391ZM43.2007 13.6925C39.9723 13.1692 36.8167 12.6178 33.743 12.0412L33.5587 13.0241C36.6407 13.6022 39.8043 14.155 43.0407 14.6796L43.2007 13.6925ZM24.3212 10.141C21.0849 9.44021 17.9632 8.71206 14.9688 7.96081L14.7254 8.93075C17.731 9.6848 20.8633 10.4154 24.1096 11.1183L24.3212 10.141ZM5.72879 5.45157C4.15492 4.98834 2.62889 4.51889 1.15314 4.04409L0.846864 4.99603C2.33098 5.47353 3.86501 5.94542 5.44643 6.41088L5.72879 5.45157Z" fill="#C8C8C8"></path>
              </svg>
              </div>
              <div className='pl-4 md:pl-0'>
                <h2 className='text-2xl font-semibold mb-1'>Tell your story</h2>
                <p className='text-[#767676]'>We'll guide you with tips along the way.</p>
              </div>
            </li>
            <li className='flex-1 flex md:flex-col'>
              <div className='flex flex-col md:flex-row'>
              <div class="mb-10 font-bold text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-[#54E6BC] text-white">
                3
              </div>
              <svg class="hidden md:block md:w-[32px] h-[30px] -mt-4 -ml-2" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.71017 9.18148C4.67161 6.68641 5.29532 4.03601 5.88116 1.46303C6.00546 0.908662 5.67582 0.349615 5.14223 0.255954C4.61225 0.12217 4.08028 0.474215 3.95997 0.988498C3.39431 3.48252 2.79868 6.05429 1.87555 8.43172C1.67625 8.93813 1.92367 9.52978 2.42955 9.74213C2.93504 9.95444 3.51048 9.68785 3.71017 9.18148Z" fill="#C8C8C8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9414 17.9544C17.4834 14.2374 21.5456 9.94627 26.1904 6.32044C26.6225 5.99916 26.7076 5.35992 26.3778 4.92223C26.0476 4.48449 25.4291 4.38253 24.993 4.74389C20.336 8.3685 16.262 12.6585 11.7079 16.3743C11.2813 16.7366 11.2119 17.3772 11.5523 17.816C11.8963 18.2146 12.5148 18.3167 12.9414 17.9544Z" fill="#C8C8C8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0577 27.2748C25.6816 27.1594 23.3056 27.0438 20.9291 26.9284C20.3876 26.8745 19.9215 27.3141 19.8919 27.8779C19.8627 28.4417 20.2837 28.8883 20.8256 28.9423C23.2057 29.058 25.5852 29.174 27.9649 29.2897C28.5104 29.3036 28.9737 28.8639 29.0001 28.2997C29.0226 27.7757 28.6028 27.2886 28.0577 27.2748Z" fill="#C8C8C8"></path>
              </svg>
              </div>
              <div className='pl-4 md:pl-0'>
                <h2 className='text-2xl font-semibold mb-1'>Share with friends and family</h2>
                <p className='text-[#767676]'>People out there want to help you.</p>
              </div>
            </li>
          </ol>
        </div>
        <div className='mt-20 flex flex-col items-center gap-2'>
          <h2 className='text-2xl sm:text-4xl font-semibold'>Fundraised for</h2>
          <div className='flex mt-10 py-2 justify-evenly flex-wrap'>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
              <img src={environment} className='' />
              <h3 className='text-sm sm:text-lg'>Environment</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
              <img src={business} className='' />
              <h3 className='text-sm sm:text-lg'>Business</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
            <img src={community} className='' />
              <h3 className='text-sm sm:text-lg'>Community</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
            <img src={competition} className='' />
              <h3 className='text-sm sm:text-lg'>Competition</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
            <img src={creative} className='' />
              <h3 className='text-sm sm:text-lg'>Creative</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
            <img src={event} className='' />
              <h3 className='text-sm sm:text-lg'>Event</h3>
            </a>
            </div>
            <div className='flex py-2 justify-evenly flex-wrap'>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%] '>
              <img src={faith} className='' />
              <h3 className='text-sm sm:text-lg'>Faith</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
              <img src={family} className='' />
              <h3 className='text-sm sm:text-lg'>Family</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
            <img src={sports} className='' />
              <h3 className='text-sm sm:text-lg'>Sports</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
            <img src={travel} className='' />
              <h3 className='text-sm sm:text-lg'>Travel</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
            <img src={volunteer} className='' />
              <h3 className='text-sm sm:text-lg'>Volunteer</h3>
            </a>
            <a href='#' className='flex flex-col items-center w-[30%] sm:w-[10%]'>
            <img src={wishes} className='' />
              <h3 className='text-sm sm:text-lg'>Wishes</h3>
            </a>
            </div>
        </div>
        <div class="container my-24 px-6 mx-auto">

  <section class="mb-32 text-gray-800 text-center">

    <h2 class="text-3xl font-bold mb-12">Testimonials</h2>

    <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
      <div class="mb-12 md:mb-0">
        <div class="flex justify-center mb-6">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-full shadow-lg w-32" />
        </div>
        <h5 class="text-lg font-bold mb-4">Maria Smantha</h5>
        <h6 class="font-medium text-blue-600 mb-4">Web Developer</h6>
        <p class="mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
            class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
            </path>
          </svg>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
          tenetur quae quaerat ad velit ab hic tenetur.
        </p>
        <ul class="flex justify-center mb-0">
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-alt"
              class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512">
              <path fill="currentColor"
                d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z">
              </path>
            </svg>
          </li>
        </ul>
      </div>
      <div class="mb-12 md:mb-0">
        <div class="flex justify-center mb-6">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg" class="rounded-full shadow-lg w-32" />
        </div>
        <h5 class="text-lg font-bold mb-4">Lisa Cudrow</h5>
        <h6 class="font-medium text-blue-600 mb-4">Graphic Designer</h6>
        <p class="mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
            class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
            </path>
          </svg>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid commodi.
        </p>
        <ul class="flex justify-center mb-0">
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
        </ul>
      </div>
      <div class="mb-0">
        <div class="flex justify-center mb-6">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-full shadow-lg w-32" />
        </div>
        <h5 class="text-lg font-bold mb-4">John Smith</h5>
        <h6 class="font-medium text-blue-600 mb-4">Marketing Specialist</h6>
        <p class="mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
            class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
            </path>
          </svg>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti.
        </p>
        <ul class="flex justify-center mb-0">
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
              </path>
            </svg>
          </li>
        </ul>
      </div>
    </div>

  </section>

</div>

      </div>
      <div>
      {/* Other components or content */}
    </div>
    </div>
  )
}

export default Home