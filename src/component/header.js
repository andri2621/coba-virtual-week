export default function header () {

  const fotoprofil = localStorage.getItem('profilImage')


    return (
        <nav class="flex items-center bg-pink-300 justify-between flex-wrap bg-teal-500 p-2">
          <div className='w-8/12 mx-auto'>

          
          
          <div class=" lg:flex lg:items-center lg:w-auto">
          <div class="items-center flex-shrink-0 text-white mr-6">
            {/* <span class="text-black font-semibold text-xl tracking-tight">Tailwind CSS</span> */}
            <span>
              <img className='h-8' src='/jobs.png'></img>
            </span>
          </div>
            <div class="text-sm lg:flex-grow">

              <a href="#responsive-header" class="block text-black font-semibold mt-4 inline-flex lg:mt-0 text-teal-200 hover:text-gray-700 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Lobby
              </a>

              <a href="#responsive-header" class="block text-black font-semibold mt-4 inline-flex lg:mt-0 text-teal-200 hover:text-gray-700 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Jadwal Interview
              </a>
            </div>
            {/* <div> */}
              {/* <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">AKUN</a> */}
              {/* <div class="rounded-full h-24 w-24 flex items-center justify-center...">Circle</div> */}
            {/* </div> */}



            {/* =========== dropdown notif ============ */}

            <ul className="flex flex-wrap lg:flex-row list-none lg:ml-auto align-center justify-center items-center flex-between">
                {/* <li className="nav-item"> */}
                {/* <div className="dropdown inline-block relative"> */}
                <li className="dropdown inline-block relative">
                  <div class="static  mr-6 ">
                    < button class=" focus:outline-none mx-2 sm:mx-0 flex justify-center" style={{ cursor: 'pointer' }}>
                      <img className='h-8 w-8' src='/notif.png'></img>
                    </button>

                    <div class="flex absolute items-right ml-3 ">
                        <div className="flex font-semibold text-white text-center text-sm -mt-8 rounded-full h-4 w-4 bg-green-500 items-center justify-center">
                          1
                        </div>
                    </div>
                  </div>

                  <ul className="dropdown-menu absolute hidden text-gray-700 ">
                    <li className="origin-top-right absolute -right-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <table class="min-w-full divide-y divide-gray-200">
                        <tbody class="bg-gray-200 divide-y divide-gray-200">

                            <>
                              <tr className='hover:bg-pastel'>
                                <td className='flex justify-center'>
                                  <div className='justify-center'>
                                    contoh notif
                                  </div>
                                </td>
                              </tr>
                            </>

                        </tbody>
                      </table>
                    </li>
                  </ul>
                </li>
              </ul>

            {/* ===============end notif===================== */}

            {/* ===========hahayyyy========== */}
            <ul className="flex flex-wrap lg:flex-row list-none lg:ml-auto align-center justify-center items-center flex-between">
                {/* <li className="nav-item"> */}
                {/* <div className="dropdown inline-block relative"> */}
                <li className="dropdown inline-block relative">
                  <div class="static  mr-6 ">
                    < button class=" focus:outline-none mx-2 sm:mx-0 flex justify-center" style={{ cursor: 'pointer' }}>
                    <span className="mr-1 font-semibold capitalize">
                        <img class="fotoprofil" src={fotoprofil === "null" || fotoprofil === null ? "defaultpic.png" : fotoprofil} alt="..." className="shadow rounded-full w-8 h-8 align-middle content-center border-2 border-red-500" />
                      </span>
                    </button>
                  </div>

                  <ul className="dropdown-menu absolute hidden text-gray-700 ">
                    <li className="origin-top-right absolute  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" style={{ cursor: 'pointer' }}>
                        {/* <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/dashboarduser"> */}
                      Profil
                      {/* </a> */}

                      </li>
                      <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" style={{ cursor: 'pointer' }}>
                        {/* <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/dashboard"> */}
                      Pengaturan
                      {/* </a> */}
                      </li>
                      <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"  style={{ cursor: 'pointer' }}>
                        {/* <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/dashboard"> */}
                      History Lamaran
                      {/* </a> */}
                      </li>
                      <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"  style={{ cursor: 'pointer' }}>
                        {/* <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={klikLogout}> */}
                      Keluar
                      {/* </a> */}
                      </li>
                      
                              
                    </li>
                  </ul>
                </li>
              </ul>
              {/* ==========end hahayyy========= */}



          </div>
          </div>
        </nav>
    )
}