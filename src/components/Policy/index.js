import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../Terms/styles.js';

function Terms(props) {
	return (
		<ScrollView>
			<View style={styles.termContainer}>
				{/* 1 */}
				<View style={styles.termsContent}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 1 장 총칙</Text>
					<Text style={styles.smallHeading}>제 1 조(목적)</Text>
					<Text style={styles.smallHeading}>
						이 약관은 (주)큐핀이 운영하는 (이하 "당사"이라 한다)에서 제공하는 인터넷 관련 서비스 1meter (이하 "서비스"라 한다)를 이용함에 있어이용자의 권리•의무 및
						책임사항을 규정함을 목적으로 합니다.
					</Text>
					<Text style={styles.smallHeading}>
						※「PC 통신,모바일 무선 등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」
					</Text>
				</View>
				{/* 2 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 2 조(정의)</Text>
					<Text style={styles.smallHeading}>
						① 당사"란 (주)큐핀이 운영하는 재화 또는 용역(이하 "재화 등"이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록
						설정한 가상의 영업장을 말하며,아울러 사이버 몰을 운영하는 사업자의 의미로도 사용합니다.
					</Text>
					<Text style={styles.smallHeading}>
						② "이용자"란 "당사"홈페이지에 접속하여 이 약관에 따라 "당사"가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
					</Text>
					<Text style={styles.smallHeading}>
						③ "회원"이라 함은 "당사"에 개인정보를 제공하여 회원등록을 한 자로서,"당사"의 정보를 지속적으로 제공받으며,"당사"가 제공하는 서비스를 계속적으로 이용할 수 있는 자를
						말합니다.
					</Text>
					<Text style={styles.smallHeading}>④ "비회원"이라 함은 회원에 가입하지 않고 "당사"가 제공하는 서비스를 이용하는 자를 말합니다.</Text>
				</View>

				{/* 3 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 3 조(약관의 명시와 개정)</Text>
					<Text style={styles.smallHeading}>
						① "당사"는 이 약관의 내용과 상호 및 대표자 성명,영업소 소재지,주소(소비자의 불만을 처리할 수 있는 곳의 주소를
						포함),전화번호,모사전송번호,전자우편주소,사업자등록번호,
					</Text>
					<Text style={styles.smallHeading}>
						통신판매업신고번호,개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 “당사” 홈페이지의 초기 서비스화면(전면)에 게시합니다.다만 약관의 내용은 이용자가 연결화면을 통하여
						볼 수 있도록 할 수 있습니다.
					</Text>
					<Text style={styles.smallHeading}>
						② "당사"는 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회•배송책임•환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면
						또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
					</Text>
					<Text style={styles.smallHeading}>
						③ "당사"는 전자상거래등에서의소비자보호에관한법률,약관의규제에관한법률,전자거래기본법, 전자서명법,정보통신망이용촉진등에 관한법률,방문판매등에관한법률,소비자보호법 등 관련법을
						위배하지 않는 범위에서 이 약관을 개정할 수 있습니다
					</Text>
					<Text style={styles.smallHeading}>
						④ "당사"가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 “당사”홈페이지의 초기화면에 그 적용일자 7 일 이전부터 적용일자 전일까지
						공지합니다.다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30 일 이전의 유예기간을 두고 공지합니다.이 경우 "당사"는 개정 전 내용과 개정 후 내용을
						명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
					</Text>
					<Text style={styles.smallHeading}>
						⑤ "당사"가 약관을 개정할 경우에는 그 개정약관은 적용일자 이후여 구매를 신청하며,"당사"는 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야
						합니다.단,회원인 경우 제 2 호내지 제 4 호의 적용을 제외할 수 있습니다.
					</Text>
					<Text style={styles.smallHeading}> 1.재화 등의 검색 및 선택</Text>
					<Text style={styles.smallHeading}>2.성명,주소,전화번호,전자우편주소(또는 이동전화번호)등의 입력</Text>
					<Text style={styles.smallHeading}>3.약관내용,청약철회권이 제한되는 서비스,배송료,설치비 등의 비용 부담과 관련한 내용에 대한 확인</Text>
					<Text style={styles.smallHeading}>4.이 약관에 동의하고 제 3 호의 사항을 확인하거나 거부하는 표시(예,마우스 클릭)</Text>
					<Text style={styles.smallHeading}>5.재화 등의 구매신청 및 이에 관한 확인 또는 "당사"의 확인에 대한 동의</Text>
					<Text style={styles.smallHeading}>6.결제방법의 선택</Text>
				</View>
				{/* 4 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 10 조(계약의 성립)</Text>
					<Text style={styles.smallHeading}>
						① "당사"는 제 9 조와 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다. 다만,미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지
						못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 합니다.
					</Text>
					<Text style={styles.smallHeading}>1.신청내용에 허위,기재누락,오기가 있는 경우</Text>
					<Text style={styles.smallHeading}>2.미성년자가 담배,주류 등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우</Text>
					<Text style={styles.smallHeading}>3.기타 구매신청에 승낙하는 것이 "당사"기술상 현저히 지장이 있다고 판단하는 경우</Text>
					<Text style={styles.smallHeading}>4.신용카드 결제 시 소유주의 동의를 얻지 않는 불법행위로 추정 또는 확인되었을 경우</Text>
					<Text style={styles.smallHeading}>5.구매 신청 고객이 제 7 조에 따른 회원 자격 제한 •정지 고객임이 확인되었을 경우</Text>
					<Text style={styles.smallHeading}>
						② "당사"의 승낙이 제 12 조 제 1 항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.
					</Text>
					<Text style={styles.smallHeading}>
						③ "당사"의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인 및 판매가능 여부,구매신청의 정정 취소 등에 관한 정보를 포함하여야 합니다.
					</Text>
				</View>

				{/* 5 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 11 조(대금지급방법)</Text>
					<Text style={styles.smallHeading}>
						"당사"에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각 호의 방법 중 가용한 방법으로 할 수 있습니다.단,"당사"는 이용자의 지급방법에 대하여 재화 등의 대금에
						어떠한 명목의 수수료도 추가하여 징수할 수 없습니다.1.온라인무통장입금
					</Text>
					<Text>2.선불카드,직불카드,신용카드 등의 각종 카드 결제</Text>
					<Text style={styles.smallHeading}>3.당사 내사방문후 대금지급</Text>
				</View>

				{/* 6 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 12 조(수신확인통지•구매신청 변경 및 취소)</Text>
					<Text style={styles.smallHeading}>① "당사"는 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다.</Text>
					<Text style={styles.smallHeading}>
						② 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있고 "당사"는 배송 전에 이용자의
						요청이 있는 경우에는 지체 없이 그 요청에 따라 처리하여야 합니다.다만,이미 대금을 지불한 경우에는 제 15 조의 청약철회 등에 관한 규정에 따릅니다.
					</Text>
				</View>

				{/* 7 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 13 조(재화 등의 공급)</Text>
					<Text style={styles.smallHeading}>
						① "당사"는 이용자와 재화 등의 공급시기에 관하여 별도의 약정이 없는 이상,이용자가 청약을 한 날부터 7 일 이내에 재화 등을 배송할 수 있도록 주문제작,포장 등 기타의
						필요한 조치를 취합니다. 다만,"당사"가 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 2 영업일 이내에 조치를 취합니다.이때
						"당사"는 이용자가 재화 등의 공급 절차 및 진행사항을 확인할 수 있도록 적절한 조치를 합니다.여행상품과 같은 무형의 재화 공급은 해당 상품에 적용되는 별도의 약관을
						교부하고 해당 서비스가 차질 없이 진행되도록 일련의 조치를 하여야 합니다.
					</Text>
					<Text style={styles.smallHeading}>
						② "당사"는 이용자가 구매한 재화에 대해 배송수단,수단별 배송비용 부담자,수단별 배송기간 등을 명시합니다.만약 "당사"가 약정 배송기간을 초과한 경우에는 그로 인한
						이용자의 손해를 배상하여야 합니다.다만,"당사"가 고의•과실이 없음을 입증한 경우에는 그러하지 아니합니다.여행상품과 같은 무형의 재화 공급은 예약한 상품에 대한 별도의
						여행자 계약서 등을 교부하여 이용자가 상기 상품의 구매와 이용에 대해 숙지할 수 있도록 하여야 합니다.
					</Text>
				</View>
				{/* 8 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 14 조(환급)</Text>
					<Text style={styles.smallHeading}>
						"당사"는 이용자가 구매신청 한 재화 등이 품절 등의 사유로 인도 또는 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고 사전에 재화 등의 대금을 받은
						경우에는 대금을 받은 날부터 2 영업일 이내에 환급하거나 환급에 필요한 조치를 취합니다.다만,여행상품의 경우 상품의 특성 상 이용자가 출발일 전 모든 예약이 완료된 이후
						계약을 해지할 경우 국내(외)여행표준약관 및 국내(외) 소비자 피해보상규정에 의거 손해 배상액을 공제하고 환불하며,기타 상품의 상품이용 계약체결 시 계약한 특별약관 등의
						규정에 의거한 상품의 취소 및 환불 수수료를 공제 후 환불합니다.
					</Text>
				</View>

				{/* 9 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 15 조(청약철회 등)</Text>
					<Text style={styles.smallHeading}>
						① "당사"와 재화 등의 구매에 관한 계약을 체결한 이용자는 수신확인의 통지를 받은 날부터 7 일 이내에는 청약의 철회를 할 수 있습니다.다만,여행상품의 경우
						국내(외)여행표준약관에 의한 환급기준에 따라 별도의 취소수수료가 부과될 수 있습니다.
					</Text>
					<Text style={styles.smallHeading}> ② 이용자는 재화 등을 배송 받은 경우 다음 각 호의 경우에는 청약철회 및 교환을 할 수 없습니다.</Text>
					<Text style={styles.smallHeading}>
						{' '}
						1.이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우 (다만,재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 사전에 청약철회 제한에 관해 고지하지
						않은 한 청약철회 등을 할 수 있습니다.)
					</Text>
					<Text style={styles.smallHeading}> 2.이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우</Text>
					<Text style={styles.smallHeading}> 3.시간의 경과에 의하여 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우</Text>
					<Text style={styles.smallHeading}> 4.같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그 원본인 재화 등의 포장을 훼손한 경우</Text>
					<Text style={styles.smallHeading}>
						{' '}
						③ 제 2 항 제 2 호 내지 제 4 호의 경우에 "당사"가 사전에 청약철회 등이 제한되는 사실을 소비자가 쉽게 알 수 있는 곳에 명기하거나 시용상품을 제공하는 등의 조치를
						하지 않았다면 이용자의 청약철회 등이 제한되지 않습니다.
					</Text>
					<Text style={styles.smallHeading}>
						{' '}
						④ 이용자는 제 1 항 및 제 2 항의 규정에 불구하고 재화 등의 내용이 표시•광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해 재화 등을 공급 받은 날부터 3 월
						이내,그 사실을 안 날 또는 알 수 있었던 날부터 30 일 이내에 청약철회 등을 할 수 있습니다.
					</Text>
				</View>

				{/* 10 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 16 조(청약철회 등의 효과)</Text>
					<Text style={styles.smallHeading}>
						① "당사"는 이용자로부터 재화 등을 반환 받은 경우 3 영업일 이내에 이미 지급 받은 재화 등의 대금을 환급합니다.이 경우 "당사"이 이용자에게 재화 등의 환급을 지연한
						때에는 그 지연기간에 대하여 공정거래위원회가 정하여 고시하는 지연이자율을 곱하여 산정한 지연이자를 지급합니다.
					</Text>
					<Text style={styles.smallHeading}>
						② "당사"는 위 대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐 등의 결제수단으로 재화 등의 대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금
						재화 등의 대금의 청구를 정지 또는 취소하도록 요청합니다.
					</Text>
					<Text style={styles.smallHeading}>③ 청약철회 등의 경우 공급 받은 재화 등의 반환에 필요한 비용은 이용자가 부담합니다.</Text>
					<Text style={styles.smallHeading}>
						③ 이용자가 재화 등을 제공받을 때 발송비를 부담한 경우에 "당사"는 청약철회 시 그 비용을 누가 부담하는지를 이용자가 알기 쉽도록 명확하게 표시합니다.
					</Text>
				</View>

				{/* 11 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 17 조(개인정보취급방침)</Text>
					<Text style={styles.smallHeading}>개인정보보호에 관한 사항은 몰에 게시된 당사의 개인정보보호정책에 규정된 내용에 따릅니다.</Text>
				</View>

				{/* 12 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 18 조("당사"의 의무)</Text>
					<Text style={styles.smallHeading}>
						① "당사"는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고 안정적으로 재화•용역을 제공하는 데 최선을 다하여야
						합니다.
					</Text>
					<Text style={styles.smallHeading}>
						② "당사"는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안시스템을 갖추어야 합니다.
					</Text>
					<Text style={styles.smallHeading}>
						③ "당사"가 상품이나 용역에 대하여 「표시•광고의공정화에관한법률」제 3 조 소정의 부당한 표시•광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.
					</Text>
				</View>

				{/* 13 */}
				<View style={styles.termsContainer}>
					<Text style={[ styles.headingPadding, styles.smallHeading ]}>제 19 조(회원의 ID$및 비밀번호에 대한 의무)</Text>
					<Text style={styles.smallHeading}>① 제 17 조의 경우를 제외한 ID 와 비밀번호에 관한 관리책임은 회원에게 있습니다.</Text>
					<Text style={styles.smallHeading}>② 회원은 자신의 ID및 비밀번호를 제 3 자에게 이용하게 해서는 안 됩니다.</Text>
					<Text style={styles.smallHeading}>
						④ 회원이 자신의 ID및 비밀번호를 도난당하거나 제 3 자가 사용하고 있음을 인지한 경우에는 바로 "당사"에 통보하고 "당사"의 안내가 있는 경우에는 그에 따라야 합니다.
					</Text>
				</View>
			</View>
		</ScrollView>
	);
}
export default Terms;
