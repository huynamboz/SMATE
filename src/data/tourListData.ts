const tours = [
  {
    id: 1,
    address: 'Hạ Long Bay, Quảng Ninh',
    cost: '1500k',
    time: '2 ngày',
    urlImage: 'https://cdn.pixabay.com/photo/2020/05/10/00/53/hue-city-5151869_1280.jpg',
    title: 'Du lịch Hạ Long',
    timeLine: `7:00 AM: Ăn sáng với món bún bò Huế tại quán Bún Bò Mệ Kéo.
8:00 AM: Tham quan Kinh Thành Huế, Đại Nội, Ngọ Môn, Điện Thái Hòa, Cửu Đỉnh.
10:30 AM: Tham quan lăng Khải Định với kiến trúc độc đáo và tinh xảo.
12:00 PM: Ăn trưa tại quán Hanh - các món bánh Huế (bánh bèo, bánh nậm, bánh lọc).
1:00 PM: Nghỉ ngơi, thư giãn tại quán cafe Vỹ Dạ Xưa với không gian yên tĩnh và view sông Hương.
2:30 PM: Tham quan lăng Tự Đức - lăng tẩm có cảnh quan thơ mộng và yên bình.
4:00 PM: Tham quan chùa Thiên Mụ - ngôi chùa cổ nổi tiếng nằm bên bờ sông Hương.
6:00 PM: Thưởng thức cơm hến tại quán cơm hến Hoa Đông.
7:00 PM: Dạo chơi trên cầu Trường Tiền, ngắm cảnh sông Hương về đêm và tham gia hoạt động thả đèn hoa đăng.
8:00 PM: Trở về khách sạn, nghỉ ngơi.`,
    summaryInfor: `Huế là một trong những điểm đến hấp dẫn nhất Việt Nam với vẻ đẹp cổ kính, lịch sử lâu đời và nền văn hóa đậm đà. Đến Huế, bạn sẽ được chiêm ngưỡng những công trình kiến trúc cổ kính, tham quan những di tích lịch sử và thưởng thức những món ăn ngon miệng. Đừng bỏ lỡ cơ hội khám phá vùng đất này và tận hưởng những trải nghiệm thú vị!`,
    costPerPerson: '100/người',
  },
  {
    id: 2,
    urlImage: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/oscvglens03tytzc4kga/V%C3%A9%20%C4%90%E1%BA%A1i%20N%E1%BB%99i%20Hu%E1%BA%BF%20v%C3%A0%20L%C4%83ng%20Ho%C3%A0ng%20Gia%20Hu%E1%BA%BF.jpg',
    title: 'Du lịch Huế và Lăng Hoàng Gia Huế',
    address: 'Huế',
    cost: '2000k',
    time: '3 ngày',
    timeLine: `7:00 AM: Ăn sáng với món bún bò Huế tại quán Bún Bò Mệ Kéo.
    8:00 AM: Tham quan Kinh Thành Huế, Đại Nội, Ngọ Môn, Điện Thái Hòa, Cửu Đỉnh.
    10:30 AM: Tham quan lăng Khải Định với kiến trúc độc đáo và tinh xảo.
    12:00 PM: Ăn trưa tại quán Hanh - các món bánh Huế (bánh bèo, bánh nậm, bánh lọc).
    1:00 PM: Nghỉ ngơi, thư giãn tại quán cafe Vỹ Dạ Xưa với không gian yên tĩnh và view sông Hương.
    2:30 PM: Tham quan lăng Tự Đức - lăng tẩm có cảnh quan thơ mộng và yên bình.
    4:00 PM: Tham quan chùa Thiên Mụ - ngôi chùa cổ nổi tiếng bên bờ sông Hương.
    6:00 PM: Thưởng thức cơm hến tại quán cơm hến Hoa Đông.`,
    summaryInfor: 'Huế là một trong những điểm đến hấp dẫn nhất Việt Nam với vẻ đẹp cổ kính, lịch sử lâu đời và nền văn hóa đậm đà. Đến Huế, bạn sẽ được chiêm ngưỡng những công trình kiến trúc cổ kính, tham quan những di tích lịch sử và thưởng thức những món ăn ngon miệng. Đừng bỏ lỡ cơ hội khám phá vùng đất này và tận hưởng những trải nghiệm thú vị!',
    costPerPerson: '150/người',
  },
  {
    id: 3,
    urlImage: 'https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg',
    title: 'Du lịch Vũng Tàu',
    address: 'Vũng Tàu',
    cost: '1200k',
    time: '2 ngày',
    timeLine: `8:00 AM: Tham quan bãi biển Bãi Trước và thưởng thức cảnh đẹp của biển xanh.
    10:30 AM: Tham quan đồi Hải Đăng và tận hưởng không gian yên bình.
    12:00 PM: Ăn trưa tại nhà hàng đặc sản Vũng Tàu với các món hải sản tươi ngon.
    2:30 PM: Tham quan đồi Con Heo và khám phá các hang động và động thạch nhũ.
    4:00 PM: Thưởng thức cà phê trứng tại quán Góc Hàn Thuyên và tham quan chợ Hàn.`,
    summaryInfor: 'Vũng Tàu là một thành phố du lịch nổi tiếng ở miền Nam Việt Nam với bãi biển tuyệt đẹp, kiến trúc độc đáo và ẩm thực đa dạng. Bạn có thể tham quan các điểm du lịch nổi tiếng như bãi biển Bãi Trước, đồi Hải Đăng và đồi Con Heo. Hãy thưởng thức những món ăn ngon và tận hưởng không gian yên bình của thành phố này. Vũng Tàu chắc chắn sẽ mang đến cho bạn những trải nghiệm thú vị và đáng nhớ.',
    costPerPerson: '100/người',
  },
  {
    id: 4,
    urlImage: 'https://hitour.vn/storage/images/upload/tour-du-lich-da-lat-2-ngay-1-dem-750.webp',
    title: 'Du lịch Đà Lạt',
    address: 'Đà Lạt',
    cost: '1800k',
    time: '3 ngày',
    timeLine: `8:00 AM: Tham quan hồ Xuân Hương và thưởng thức cảnh đẹp của hồ nước xanh biếc.
    10:30 AM: Tham quan thác Pongour và tận hưởng không gian yên bình.
    12:00 PM: Ăn trưa tại nhà hàng đặc sản Đà Lạt với các món hải sản tươi ngon.
    2:30 PM: Tham quan thác Prenn và khám phá các hang động và động thạch nhũ.
    4:00 PM: Thưởng thức cà phê trứng tại quán Góc Hàn Thuyên và tham quan chợ Hàn.`,
    summaryInfor: 'Đà Lạt là một thành phố du lịch nổi tiếng ở miền Nam Việt Nam với hồ nước xanh biếc, thác nước hùng vĩ và kiến trúc độc đáo. Bạn có thể tham quan các điểm du lịch nổi tiếng như hồ Xuân Hương, thác Pongour và thác Prenn. Hãy thưởng thức những món ăn ngon và tận hưởng không gian yên bình của thành phố này. Đà Lạt chắc chắn sẽ mang đến cho bạn những trải nghiệm thú vị và đáng nhớ.',
    costPerPerson: '150/người',
  },
  {
    id: 5,
    urlImage: 'https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/05_2019/cau-vang-da-nang-6.jpg',
    title: 'Du lịch Đà Nẵng',
    address: 'Đà Nẵng',
    cost: '1600k',
    time: '3 ngày',
    timeLine: `8:00 AM: Tham quan bán đảo Sơn Trà và thưởng thức cảnh đẹp của bãi biển Mỹ Khê.
    10:30 AM: Tham quan cầu Rồng và tận hưởng không gian sôi động tại khu vực trung tâm thành phố.
    12:00 PM: Ăn trưa tại nhà hàng đặc sản Đà Nẵng với các món hải sản tươi ngon.
    2:30 PM: Tham quan Ngũ Hành Sơn và khám phá các hang động và động thạch nhũ.
    4:00 PM: Thưởng thức cà phê trứng tại quán Góc Hàn Thuyên và tham quan chợ Hàn.
    6:00 PM: Dạo chơi trên cầu Sông Hàn và ngắm cảnh thành phố về đêm.
    8:00 PM: Trở về khách sạn, nghỉ ngơi.`,
    summaryInfor: 'Đà Nẵng là một thành phố du lịch nổi tiếng ở miền Trung Việt Nam với bãi biển tuyệt đẹp, kiến trúc độc đáo và ẩm thực đa dạng. Bạn có thể tham quan các điểm du lịch nổi tiếng như bán đảo Sơn Trà, cầu Rồng và Ngũ Hành Sơn. Hãy thưởng thức những món ăn ngon và tận hưởng không gian sôi động của thành phố này. Đà Nẵng chắc chắn sẽ mang đến cho bạn những trải nghiệm thú vị và đáng nhớ.',
    costPerPerson: '150/người',
  },
  {
    id: 7,
    urlImage: 'https://bomchuyendung.com/upload/images/the-landmark-la-toa-nha-cao-nhat-viet-nam-va-ca-khu-vuc-dong-nam-a.jpg',
    title: 'Du lịch TP Hồ Chí Minh',
    address: 'TP Hồ Chí Minh',
    cost: '2000k',
    time: '3 ngày',
    timeLine: '...',
    summaryInfor: '...',
    costPerPerson: '150/người',
  },
  {
    id: 8,
    urlImage: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2023/3/31/hai-phong-6-1680234763392125722891.jpg',
    title: 'Du lịch Hải Phòng',
    address: 'Hải Phòng',
    cost: '1300k',
    time: '2 ngày',
    timeLine: `9:00 AM: Tham quan cảng Cát Bà.
    11:00 AM: Tham quan vịnh Lan Hạ.
    1:00 PM: Tham quan đảo Cát Bà.
    3:00 PM: Tham quan đảo Cát Bà.
    5:00 PM: Tham quan đảo Cát Bà.
    7:00 PM: Tham quan đảo Cát Bà.`,
    summaryInfor: 'Hải Phòng là một thành phố nằm ở miền Bắc Việt Nam với nhiều điểm du lịch nổi tiếng như cảng Cát Bà, vịnh Lan Hạ và đảo Cát Bà. Bạn sẽ được tham quan những địa điểm đẹp và thú vị, thưởng thức ẩm thực đặc sản và tận hưởng không gian yên bình của vùng đất này. Hãy đến Hải Phòng để trải nghiệm những điều tuyệt vời nhất!',
    costPerPerson: '120/người',
  },
  {
    id: 9,
    urlImage: 'https://btnmt.1cdn.vn/2023/06/15/1.jpg',
    title: 'Du lịch Quảng Bình',
    address: 'Quảng Bình',
    cost: '1800k',
    time: '3 ngày',
    timeLine: `9h sáng: Tham quan hang Sơn Đoòng.
    11h sáng: Tham quan hang Thiên Đường.
    1h chiều: Tham quan vịnh Hạ Long.`,
    summaryInfor: 'Quảng Bình là một tỉnh nằm ở miền Trung Việt Nam với nhiều điểm du lịch nổi tiếng như hang Sơn Đoòng, hang Thiên Đường và vịnh Hạ Long. Bạn sẽ được tham quan những địa điểm đẹp và thú vị, thưởng thức ẩm thực đặc sản và tận hưởng không gian yên bình của vùng đất này. Hãy đến Quảng Bình để trải nghiệm những điều tuyệt vời nhất!',
    costPerPerson: '150/người',
  },
  {
    id: 7,
    urlImage: 'https://bomchuyendung.com/upload/images/the-landmark-la-toa-nha-cao-nhat-viet-nam-va-ca-khu-vuc-dong-nam-a.jpg',
    title: 'Du lịch TP Hồ Chí Minh',
    address: 'TP Hồ Chí Minh',
    cost: '2000k',
    time: '3 ngày',
    timeLine: `Ngày 1: Tham quan chợ Bến Thành và khu phố Tây Bùi Viện.
    Ngày 2: Tham quan cung điện Độc Lập và nhà thờ Đức Bà.
    Ngày 3: Tham quan khu du lịch Văn Thánh và công viên Tao Đàn.`,
    summaryInfor: 'TP Hồ Chí Minh là một thành phố năng động và sôi động với nhiều điểm du lịch nổi tiếng như chợ Bến Thành, cung điện Độc Lập và khu phố Tây Bùi Viện. Bạn sẽ được tham quan những địa điểm đẹp và thú vị, thưởng thức ẩm thực đặc sản và tận hưởng không gian sôi động của thành phố này. Hãy đến TP Hồ Chí Minh để trải nghiệm những điều tuyệt vời nhất!',
    costPerPerson: '150/người',
  },
  {
    id: 8,
    urlImage: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2023/3/31/hai-phong-6-1680234763392125722891.jpg',
    title: 'Du lịch Hải Phòng',
    address: 'Hải Phòng',
    cost: '1300k',
    time: '2 ngày',
    timeLine: `
    Ngày 1: Tham quan cảng Cát Bà.
    Ngày 2: Tham quan vịnh Lan Hạ.
    Ngày 3: Tham quan đảo Cát Bà.
    Ngày 4: Tham quan đảo Cát Bà.
    Ngày 5: Tham quan đảo Cát Bà.
    Ngày 6: Tham quan đảo Cát Bà.`,
    summaryInfor: 'Hải Phòng là một thành phố nằm ở miền Bắc Việt Nam với nhiều điểm du lịch nổi tiếng như cảng Cát Bà, vịnh Lan Hạ và đảo Cát Bà. Bạn sẽ được tham quan những địa điểm đẹp và thú vị, thưởng thức ẩm thực đặc sản và tận hưởng không gian yên bình của vùng đất này. Hãy đến Hải Phòng để trải nghiệm những điều tuyệt vời nhất!',
    costPerPerson: '120/người',
  },
  {
    id: 9,
    urlImage: 'https://btnmt.1cdn.vn/2023/06/15/1.jpg',
    title: 'Du lịch Quảng Bình',
    address: 'Quảng Bình',
    cost: '1800k',
    time: '3 ngày',
    timeLine: `Ngày 1: Tham quan hang Sơn Đoòng.
    Ngày 2: Tham quan hang Thiên Đường.
    Ngày 3: Tham quan vịnh Hạ Long.',
    Ngày 4: Tham quan động Phong Nha.
    Ngày 5: Tham quan động Phong Nha.
    Ngày 6: Tham quan động Phong Nha.
    Ngày 7: Tham quan động Phong Nha.
    Ngày 8: Tham quan động Phong Nha.
    Ngày 9: Tham quan động Phong Nha.`,
    summaryInfor: 'Quảng Bình là một tỉnh nằm ở miền Trung Việt Nam với nhiều điểm du lịch nổi tiếng như hang Sơn Đoòng, hang Thiên Đường và vịnh Hạ Long. Bạn sẽ được tham quan những địa điểm đẹp và thú vị, thưởng thức ẩm thực đặc sản và tận hưởng không gian yên bình của vùng đất này. Hãy đến Quảng Bình để trải nghiệm những điều tuyệt vời nhất!',
    costPerPerson: '150/người',
  },
];

export default tours;